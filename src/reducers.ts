import { combineReducers } from '@reduxjs/toolkit';

import bindings from './reducers/bindings';
import source from './reducers/source';
import search from './reducers/search';

const reducer = combineReducers({
    bindings,
    source,
    search,
});

export type State = ReturnType<typeof reducer>;
export default reducer;
