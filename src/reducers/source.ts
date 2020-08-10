import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Layer {
    Function = 'function',
}

export interface State {
    text: string;
    layer: Layer;
    ident: string;
}

const INITIAL: State = {
    text: '',
    layer: Layer.Function,
    ident: '',
};

const { actions, reducer } = createSlice({
    name: 'source',
    initialState: INITIAL,
    reducers: {
        textChange: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        layerChange: (state, action: PayloadAction<Layer>) => {
            state.layer = action.payload;
        },
        identChange: (state, action: PayloadAction<string>) => {
            state.ident = action.payload;
        },
    },
});

export const { textChange, layerChange, identChange } = actions;
export default reducer;
