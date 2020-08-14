import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import bindings from 'bindings';

import reducer from './reducers';
import { loaded } from './reducers/bindings';
import ErrorBoundary from './ErrorBoundary';
import Application from './Application';

import './index.css';

const store = configureStore({
    reducer,

    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['bindings/loaded'],
            ignoredPaths: ['bindings.IndexedSource'],
        },
    }),
});

const App: React.SFC = () => (
    <Provider store={store}>
        <ErrorBoundary>
            <Application />
        </ErrorBoundary>
    </Provider>
);

// TODO: Should actually have basic HTML structure in the HTML
const main = document.createElement('div');
main.id = 'main';
const body = document.getElementsByTagName('body')[0];
body.prepend(main);
ReactDOM.render(<App />, main);

async function bootup() {
    const { IndexedSource } = await bindings();

    store.dispatch(loaded({ IndexedSource }));
}

bootup();
