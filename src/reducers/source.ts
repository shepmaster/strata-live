import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {
    text: string;
}

const INITIAL: State = {
    text: '',
};

const { actions, reducer } = createSlice({
    name: 'source',
    initialState: INITIAL,
    reducers: {
        textChange: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
});

export const { textChange } = actions;
export default reducer;
