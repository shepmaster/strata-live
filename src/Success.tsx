import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { getLayerBold, Highlight, getLayers } from './selectors';

import css from './Success.module.css';

const Success: React.SFC = () => {
    const layers = useSelector(getLayers).unwrapOr([]);
    const layerBold = useSelector(getLayerBold).unwrapOr([]);

    const highlightsToReact = (highlights: Array<Highlight>) =>
        highlights.map(({ not, is }, i) => (
            <Fragment key={i}>
                {not}
                <b>{is}</b>
            </Fragment>
        ));

    return (
        <div className={css.container}>
            {layers.map((l, i) => (
                <pre key={i} className={css.layer} data-layer={i}>
                    {highlightsToReact(l)}
                </pre>
            ))}
            <pre className={css.code}>{highlightsToReact(layerBold)}</pre>
        </div>
    );
};

export default Success;
