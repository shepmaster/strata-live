import { createSelector } from '@reduxjs/toolkit';
import { Result, Ok, Err } from '@hqoss/monads';

import { State } from './reducers';

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
    (IndexedSource, source) =>
        IndexedSource && strataErr(() => new IndexedSource(source))
);

export const getExpressionDepth = createSelector([getIndex], (idx) =>
    idx?.map((i) => i.expressionDepth())
);

const getFound = createSelector(
    [getIndex, getSourceLayer, getSourceIdent],
    (idx, layer, ident) =>
        idx?.andThen((idx) => strataErr(() => idx.searchLayer(layer, ident)))
);

type ExtentList = BigUint64Array;

const formatExtentList = (found: ExtentList) => {
    let output = '';
    for (let i = 0; i < found.length; i += 2) {
        output += `[${found[i]}, ${found[i + 1]}]`;
    }
    return output;
};

interface ExecutionResult {
    output?: string;
    error?: string;
}

export const getExecutionResult = createSelector([getFound], (found) =>
    found
        ?.map(
            (found) => ({ output: formatExtentList(found) } as ExecutionResult)
        )
        .unwrapOrElse((e) => ({ error: JSON.stringify(e) } as ExecutionResult))
);

const zz = (src: string, found: ExtentList) => {
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

export const getLayer0 = createSelector(
    [getSourceText, getFound],
    (src, found) => found?.map((found) => zz(src, found))
);
