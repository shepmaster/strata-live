import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { textChange, layerChange, identChange, Layer } from './reducers/source';
import {
    getSourceText,
    getSourceIdent,
    getExecutionResult,
    getSourceLayer,
    getExpressionDepth,
} from './selectors';

import css from './Input.module.css';

export const TOUR_ID_SOURCE = 'source';
export const TOUR_ID_LAYER = 'layer';
export const TOUR_ID_IDENT = 'ident';

const Input: React.SFC = () => {
    const dispatch = useDispatch();

    const source = useSelector(getSourceText);
    const expressionDepth = useSelector(getExpressionDepth)?.unwrapOr(0);
    const layer = useSelector(getSourceLayer);
    const ident = useSelector(getSourceIdent);
    const executionResult = useSelector(getExecutionResult);

    const expressions = Array.from(Array(expressionDepth).keys()).map((i) => (
        <option key={i}>expression-{i}</option>
    ));

    const { output = '', error = '' } = executionResult!;

    return (
        <>
            <section>
                <h1>Source code</h1>
                <textarea
                    value={source}
                    onChange={(e) =>
                        dispatch(textChange(e.currentTarget.value))
                    }
                    data-tour-id={TOUR_ID_SOURCE}
                    className={css.source}
                ></textarea>
            </section>

            <section>
                <h1>Layer</h1>
                <select
                    value={layer}
                    onChange={(e) =>
                        dispatch(layerChange(e.currentTarget.value as Layer))
                    }
                    data-tour-id={TOUR_ID_LAYER}
                >
                    <option>function</option>
                    {expressions}
                </select>
            </section>

            <section>
                <h1>Ident</h1>
                <textarea
                    value={ident}
                    onChange={(e) =>
                        dispatch(identChange(e.currentTarget.value))
                    }
                    data-tour-id={TOUR_ID_IDENT}
                    className={css.source}
                ></textarea>
            </section>

            <section>
                <h1>Output</h1>
                <div>{output}</div>
            </section>

            <section>
                <h1>Error</h1>
                <div>{error}</div>
            </section>
        </>
    );
};

export default Input;
