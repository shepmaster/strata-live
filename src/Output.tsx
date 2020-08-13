import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Result } from '@hqoss/monads';

import { getLayer0, getLayerBold, Highlight } from './selectors';

import css from './Output.module.css';

export const TOUR_ID_OUTPUT = 'output';

const Output: React.SFC = () => {
    const layer0 = useSelector(getLayer0);
    const layerBold = useSelector(getLayerBold);

    // Errors are displayed elsewhere
    function defaultArray<T>(maybeArray?: Result<Array<T>, Error>): Array<T> {
        return maybeArray?.unwrapOr([]) || [];
    }

    const highlightsToReact = (highlights: Array<Highlight>) =>
        highlights.map(({ not, is }, i) => (
            <Fragment key={i}>
                {not}
                <b>{is}</b>
            </Fragment>
        ));

    const layer0Html = highlightsToReact(defaultArray(layer0));
    const layerBoldHtml = highlightsToReact(defaultArray(layerBold));

    return (
        <div className={css.container} data-tour-id={TOUR_ID_OUTPUT}>
            <pre className={css.layer0}>{layer0Html}</pre>
            <pre className={css.code}>{layerBoldHtml}</pre>
        </div>
    );
};

export default Output;
