import React from 'react';
import { useSelector } from 'react-redux';

import { getError } from './selectors';

import Success from './Success';

import css from './Output.module.css';

export const TOUR_ID_OUTPUT = 'output';

interface ErrorProps {
    e: Error;
}

const ShowError: React.SFC<ErrorProps> = ({ e }) => {
    const t = JSON.stringify(e);
    return (
        <section>
            <h1>An error occurred with your input</h1>
            <code>{t}</code>
        </section>
    );
};

const Output: React.SFC = () => {
    const error = useSelector(getError);

    return (
        <div className={css.container} data-tour-id={TOUR_ID_OUTPUT}>
            {error.match({
                ok: () => <Success />, // eslint-disable-line react/display-name
                err: (e) => <ShowError e={e} />, // eslint-disable-line react/display-name
            })}
        </div>
    );
};

export default Output;
