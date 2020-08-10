import { combineReducers } from '@reduxjs/toolkit';

import bindings from './reducers/bindings';
import source from './reducers/source';

const reducer = combineReducers({
    bindings,
    source,
});

export type State = ReturnType<typeof reducer>;
export default reducer;
