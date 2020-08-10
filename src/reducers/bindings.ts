import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IndexedSource = typeof import('bindings').IndexedSource;

export interface State {
    IndexedSource?: IndexedSource;
}

const INITIAL: State = {
    IndexedSource: undefined,
};

const { actions, reducer } = createSlice({
    name: 'bindings',
    initialState: INITIAL,
    reducers: {
        loaded: (
            state,
            action: PayloadAction<{ IndexedSource: IndexedSource }>
        ) => ({ ...state, ...action.payload }),
    },
});

export const { loaded } = actions;
export default reducer;
