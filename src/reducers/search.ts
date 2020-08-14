import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Layer {
    Function = 'function',
}

interface OneSearch {
    layer: Layer;
    ident: string;
}

const defaultSearch = (): OneSearch => ({
    layer: Layer.Function,
    ident: '',
});

export type State = {
    current: number;
    searches: Array<OneSearch>;
};

const INITIAL: State = {
    current: 0,
    searches: [defaultSearch()],
};

const { actions, reducer } = createSlice({
    name: 'search',
    initialState: INITIAL,
    reducers: {
        add: (state) => {
            state.searches.push(defaultSearch());
        },
        select: (state, action: PayloadAction<number>) => {
            const idx = action.payload;
            if (idx >= 0 && idx < state.searches.length) {
                state.current = idx;
            }
        },
        close: (state, action: PayloadAction<number>) => {
            const idx = action.payload;
            if (idx >= 0 && idx < state.searches.length) {
                state.searches.splice(state.current, 1);

                if (state.searches.length == 0) {
                    state.searches.push(defaultSearch());
                }

                if (state.current >= state.searches.length) {
                    state.current = state.searches.length - 1;
                }
            }
        },
        layerChange: (
            state,
            action: PayloadAction<{ idx: number; layer: Layer }>
        ) => {
            const { idx, layer } = action.payload;
            const search = state.searches[idx];
            if (search) {
                search.layer = layer;
            }
        },
        identChange: (
            state,
            action: PayloadAction<{ idx: number; ident: string }>
        ) => {
            const { idx, ident } = action.payload;
            const search = state.searches[idx];
            if (search) {
                search.ident = ident;
            }
        },
    },
});

export const { add, select, close, layerChange, identChange } = actions;
export default reducer;
