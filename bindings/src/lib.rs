use fuzzy_pickles::{
    ast,
    visit::{Control, Visit, Visitor},
    HasExtent,
};
use serde::Serialize;
use snafu::{OptionExt, ResultExt, Snafu};
use std::str::FromStr;
use std::{
    borrow::Borrow,
    collections::{BTreeMap, BTreeSet},
    ops::Deref,
};
use strata::Algebra;
use wasm_bindgen::prelude::*;

type Extent = strata::ValidExtent;

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console,
js_name = log)]
    fn console_log(s: &str);
}

#[allow(unused_macros)]
macro_rules! clog {
    ($($a:tt)*) => {
        console_log(&format!($($a)*))
    };
}

#[wasm_bindgen]
#[derive(Debug)]
pub struct IndexedSource {
    term_ident: BTreeMap<String, Vec<Extent>>,
    // layer_enum: BTreeSet<fuzzy_pickles::Extent>,
    layer_function: Vec<Extent>,
    // layer_function_header: BTreeSet<fuzzy_pickles::Extent>,
    // layer_struct: BTreeSet<fuzzy_pickles::Extent>,
    // layer_generic_declarations: BTreeSet<fuzzy_pickles::Extent>,
    // layer_where: BTreeSet<fuzzy_pickles::Extent>,
    layers_expression: Vec<Vec<Extent>>,
    // layers_statement: Vec<BTreeSet<fuzzy_pickles::Extent>>,
}

#[wasm_bindgen]
impl IndexedSource {
    #[wasm_bindgen(constructor)]
    pub fn new(s: &str) -> Result<IndexedSource, JsValue> {
        let file = fuzzy_pickles::parse_rust_file(&s).context(UnableToParseSource)?;

        let mut tmp = IndexedSourceIntermediate::default();
        tmp.source = s;

        file.visit(&mut tmp);

        Ok(tmp.into())
    }

    fn ident(&self, ident: &str) -> &[Extent] {
        self.term_ident
            .get(ident)
            .map(Deref::deref)
            .unwrap_or_default()
    }

    #[wasm_bindgen(js_name = searchIdent)]
    pub fn search_ident(&self, ident: &str) -> JsExtents {
        self.ident(ident).iter().collect_to_js()
    }

    #[wasm_bindgen(js_name = expressionDepth)]
    pub fn expression_depth(&self) -> usize {
        self.layers_expression.len()
    }

    #[wasm_bindgen(js_name = searchLayer)]
    pub fn search_layer(&self, layer: &str, ident: &str) -> Result<JsExtents, JsValue> {
        let layer = match layer.parse()? {
            Layer::Function => &*self.layer_function,
            Layer::Expression(None) => UnknownExpressionLayer { index: None }.fail()?,
            Layer::Expression(Some(index)) => self
                .layers_expression
                .get(index)
                .context(UnknownExpressionLayer { index })?,
        };

        let ident = self.ident(ident);

        Ok(strata::Containing::new(layer, ident)
            .iter_tau()
            .collect_to_js())
    }

    // Should this be unified with search_layer to avoid duplicate work?
    #[wasm_bindgen(js_name = searchWithinLayer)]
    pub fn search_within_layer(&self, layer: &str, ident: &str) -> Result<JsExtents, JsValue> {
        let layer = match layer.parse()? {
            Layer::Function => &*self.layer_function,
            Layer::Expression(None) => UnknownExpressionLayer { index: None }.fail()?,
            Layer::Expression(Some(index)) => self
                .layers_expression
                .get(index)
                .context(UnknownExpressionLayer { index })?,
        };

        let ident = self.ident(ident);

        Ok(strata::ContainedIn::new(ident, layer)
            .iter_tau()
            .collect_to_js())
    }
}

#[derive(Debug)]
pub enum Layer {
    Function,
    Expression(Option<usize>),
}

impl FromStr for Layer {
    type Err = Error;

    fn from_str(s: &str) -> Result<Self> {
        match s {
            "function" => Ok(Layer::Function),
            "expression" => Ok(Layer::Expression(None)),
            layer => {
                if layer.starts_with("expression-") {
                    let idx = &layer["expression-".len()..];
                    idx.parse()
                        .map(|idx| Layer::Expression(Some(idx)))
                        .map_err(|_| UnknownLayer { layer }.build())
                } else {
                    UnknownLayer { layer }.fail()
                }
            }
        }
    }
}

type JsExtents = Vec<u64>;

trait JsExtentExt: Iterator
where
    Self::Item: Borrow<Extent>,
{
    fn collect_to_js(self) -> JsExtents
    where
        Self: Sized,
    {
        self.flat_map(|e| {
            let e = e.borrow();
            vec![e.0, e.1] // Ugh
        })
        .collect()
    }
}

impl<I> JsExtentExt for I
where
    I: Iterator,
    I::Item: Borrow<Extent>,
{
}

impl From<IndexedSourceIntermediate<'_>> for IndexedSource {
    fn from(other: IndexedSourceIntermediate<'_>) -> Self {
        let IndexedSourceIntermediate {
            term_ident,
            layer_function,
            layers_expression,
            ..
        } = other;

        let x = |v: BTreeSet<fuzzy_pickles::Extent>| {
            v.into_iter().map(|e| (e.0 as u64, e.1 as u64)).collect() // TODO: TryFrom
        };

        let term_ident = term_ident.into_iter().map(|(k, v)| (k, x(v))).collect();

        let layer_function = x(layer_function);

        let layers_expression = layers_expression.into_iter().map(x).collect();

        Self {
            term_ident,
            layer_function,
            layers_expression,
        }
    }
}

#[derive(Debug, Default)]
struct IndexedSourceIntermediate<'a> {
    source: &'a str,

    term_ident: BTreeMap<String, BTreeSet<fuzzy_pickles::Extent>>,
    // layer_enum: BTreeSet<fuzzy_pickles::Extent>,
    layer_function: BTreeSet<fuzzy_pickles::Extent>,
    // layer_function_header: BTreeSet<fuzzy_pickles::Extent>,
    // layer_struct: BTreeSet<fuzzy_pickles::Extent>,
    // layer_generic_declarations: BTreeSet<fuzzy_pickles::Extent>,
    // layer_where: BTreeSet<fuzzy_pickles::Extent>,
    layers_expression: Vec<BTreeSet<fuzzy_pickles::Extent>>,
    // layers_statement: Vec<BTreeSet<fuzzy_pickles::Extent>>,

    // stmt_depth: usize,
    expr_depth: usize,
}

impl std::ops::Index<fuzzy_pickles::Extent> for IndexedSourceIntermediate<'_> {
    type Output = str;

    fn index(&self, extent: fuzzy_pickles::Extent) -> &str {
        &self.source[extent.0..extent.1]
    }
}

impl Visitor<'_> for IndexedSourceIntermediate<'_> {
    fn visit_ident(&mut self, ident: &ast::Ident) -> Control {
        let s = self[ident.extent].to_owned();
        self.term_ident.entry(s).or_default().insert(ident.extent);
        Control::Continue
    }

    fn visit_function(&mut self, function: &ast::Function) -> Control {
        self.layer_function.insert(function.extent);
        Control::Continue
    }

    fn visit_expression(&mut self, expr: &ast::Expression) -> Control {
        while self.layers_expression.len() <= self.expr_depth {
            self.layers_expression.push(Default::default());
        }

        self.layers_expression[self.expr_depth].insert(expr.extent());

        self.expr_depth += 1;
        Control::Continue
    }

    fn exit_expression(&mut self, _: &ast::Expression) {
        self.expr_depth -= 1;
    }
}

#[derive(Debug, Snafu)]
pub enum Error {
    UnableToParseSource {
        // FIXME: Why don't we implement Error
        #[snafu(source(from(fuzzy_pickles::ErrorDetail, |e| format!("{:?}", e).into())))]
        source: Box<dyn std::error::Error>,
    },

    UnknownLayer {
        layer: String,
    },

    UnknownExpressionLayer {
        index: Option<usize>,
    },
}

type Result<T, E = Error> = std::result::Result<T, E>;

impl From<Error> for JsValue {
    fn from(e: Error) -> Self {
        // FIXME: Figure out appropriate format

        #[derive(Serialize)]
        #[serde(tag = "name")]
        struct StrataError {
            text: String,
        }

        let e = JsValue::from_serde(&StrataError {
            text: e.to_string(),
        });

        e.unwrap_or_else(|ee| JsValue::from(format!("Unable to produce error: {}", ee)))
    }
}
