import React from 'react';
import { useSelector } from 'react-redux';

import { getIsLoaded } from './selectors';

import Input from './Input';
import Output from './Output';
import Tour from './Tour';

import css from './Application.module.css';

const Application: React.SFC = () => {
    const isLoaded = useSelector(getIsLoaded);

    if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className={css.container}>
                <div className={css.input}>
                    <Input />
                </div>
                <div className={css.output}>
                    <Output />
                </div>
                <div className={css.help}>
                    <Tour />
                </div>
            </div>
        );
    }
};

export default Application;
