import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { getSourceText, getLayer0 } from './selectors';

import css from './Output.module.css';

export const TOUR_ID_OUTPUT = 'output';

const Output: React.SFC = () => {
    const source = useSelector(getSourceText);
    const layer0 = useSelector(getLayer0);

    const layer0Html = layer0!.unwrapOr([]).map(({ not, is }, i) => (
        <Fragment key={i}>
            {not}
            <b>{is}</b>
        </Fragment>
    ));

    return (
        <div className={css.container} data-tour-id={TOUR_ID_OUTPUT}>
            <pre className={css.layer0}>{layer0Html}</pre>
            <pre className={css.code}>{source}</pre>
        </div>
    );
};

export default Output;
