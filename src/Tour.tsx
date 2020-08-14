import React, { useContext, FunctionComponent } from 'react';
import { ShepherdTour, ShepherdTourContext } from 'react-shepherd';
import { useDispatch } from 'react-redux';

import { TOUR_ID_SOURCE, TOUR_ID_LAYER, TOUR_ID_IDENT } from './Input';
import { TOUR_ID_OUTPUT } from './Output';

import { textChange } from './reducers/source';
import { identChange, layerChange, Layer } from './reducers/search';

import css from './Tour.module.css';

type ExtractProps<P> = P extends FunctionComponent<infer T> ? T : never;
type TourOptions = ExtractProps<typeof ShepherdTour>['tourOptions'];
type Steps = ExtractProps<typeof ShepherdTour>['steps'];
type Buttons = Required<Steps[0]>['buttons'];
type Button = Buttons[0];

const DEMO_SOURCE = `fn foo() {
    let alpha = 42;
}

fn bar() {
    let beta = 99;
}`;

const DEMO_IDENT = 'alpha';

const Button: React.SFC = () => {
    const tour = useContext(ShepherdTourContext);

    return <button onClick={tour!.start}>Quick Tour</button>;
};

const Tour: React.SFC = () => {
    const dispatch = useDispatch();

    const tourOptions: TourOptions = {
        useModalOverlay: false,
        defaultStepOptions: {
            classes: css.container,
            popperOptions: {
                modifiers: [{ name: 'offset', options: { offset: [0, 40] } }],
            },
        },
    };

    const back: Button = {
        type: 'back',
        text: 'Back',
        classes: css.prevButton,
    };

    const next: Button = {
        type: 'next',
        text: 'Next',
        classes: css.nextButton,
    };

    const done: Button = {
        type: 'next',
        text: 'Done',
        classes: css.nextButton,
    };

    const setSource: Button = {
        text: '✨ Example ✨',
        action: function () {
            dispatch(textChange(DEMO_SOURCE));
            this.next();
        },
        classes: css.actionButton,
    };

    const setLayer: Button = {
        text: '✨ Example ✨',
        action: function () {
            dispatch(layerChange({ idx: 0, layer: Layer.Function }));
            this.next();
        },
        classes: css.actionButton,
    };

    const setIdent: Button = {
        text: '✨ Example ✨',
        action: function () {
            dispatch(identChange({ idx: 0, ident: DEMO_IDENT }));
            this.next();
        },
        classes: css.actionButton,
    };

    const steps: Steps = [
        {
            id: 'source',
            attachTo: {
                element: `[data-tour-id="${TOUR_ID_SOURCE}"]`,
                on: 'right',
            },
            title: 'Provide source code',
            text: ['Enter some valid Rust source code here'],
            buttons: [setSource, next],
        },
        {
            id: 'layer',
            attachTo: {
                element: `[data-tour-id="${TOUR_ID_LAYER}"]`,
                on: 'right',
            },
            title: 'Select a layer',
            text: ['A layer is a section of the code you are interested in'],
            buttons: [back, setLayer, next],
        },
        {
            id: 'ident',
            attachTo: {
                element: `[data-tour-id="${TOUR_ID_IDENT}"]`,
                on: 'right',
            },
            title: 'Search for an identifier',
            text: ['All layers containing this identifier will be matched'],
            buttons: [back, setIdent, next],
        },
        {
            id: 'output',
            attachTo: {
                element: `[data-tour-id="${TOUR_ID_OUTPUT}"]`,
                on: 'bottom-start',
            },
            title: 'See matching layers',
            text: ['Any layer that matched will be highlighted here'],
            buttons: [back, done],
        },
    ];

    return (
        <ShepherdTour steps={steps} tourOptions={tourOptions}>
            <Button />
        </ShepherdTour>
    );
};

export default Tour;
