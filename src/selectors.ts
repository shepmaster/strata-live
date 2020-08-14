import { createSelector } from '@reduxjs/toolkit';
import { Result, Ok, Err } from '@hqoss/monads';

import { State } from './reducers';
import { IndexedSource } from 'bindings';

function strataErr<T>(f: () => T): Result<T, Error> {
    try {
        return Ok(f());
    } catch (e) {
        if (e.name == 'StrataError') {
            return Err(e);
        } else {
            throw e;
        }
    }
}

const getIndexedSource = (state: State) => state.bindings.IndexedSource;
export const getSourceText = (state: State): string => state.source.text;
export const getSourceLayer = (state: State): string => state.source.layer;
export const getSourceIdent = (state: State): string => state.source.ident;

export const getIsLoaded = createSelector([getIndexedSource], (a) => !!a);

const getIndex = createSelector(
    [getIndexedSource, getSourceText],
    (IndexedSource, source): Zzz => {
        if (IndexedSource) {
            return strataErr(() => new IndexedSource(source));
        } else {
            return Err(new Error('naw'));
        }
    }
);

type Zzz = Result<IndexedSource, Error>;

export const getExpressionDepth = createSelector([getIndex], (idx) =>
    idx.map((i) => i.expressionDepth())
);

const getFound = createSelector(
    [getIndex, getSourceLayer, getSourceIdent],
    (idx, layer, ident) =>
        idx.andThen((idx) => strataErr(() => idx.searchLayer(layer, ident)))
);

const getBold = createSelector(
    [getIndex, getSourceLayer, getSourceIdent],
    (idx, layer, ident) =>
        idx.andThen((idx) =>
            strataErr(() => idx.searchWithinLayer(layer, ident))
        )
);

type ExtentList = BigUint64Array;

export interface Highlight {
    not: string;
    is: string;
}

const buildHighlight = (src: string, found: ExtentList): Array<Highlight> => {
    // TODO: All the coercion seems wrong
    // TODO: Are we correctly slicing by bytes?

    let start = 0n;
    const parts = [];

    for (let i = 0; i < found.length; i += 2) {
        const s = found[i];
        const e = found[i + 1];

        const not = src.slice(Number(start), Number(s));
        const is = src.slice(Number(s), Number(e));
        parts.push({ not, is });

        start = e;
    }

    const not = src.slice(Number(start));
    parts.push({ not, is: '' });

    return parts;
};

const maybeBuildHighlight = (src: string, found: Result<ExtentList, Error>) =>
    found.map((found) => buildHighlight(src, found));

export const getLayer0 = createSelector(
    [getSourceText, getFound],
    maybeBuildHighlight
);

export const getLayerBold = createSelector(
    [getSourceText, getBold],
    maybeBuildHighlight
);

export const getError = createSelector(
    [getFound, getBold],
    (found, bold): Result<null, Error> =>
        found
            .match({
                ok: () => bold,
                err: (e) => Err(e),
            })
            .map(() => null)
);
