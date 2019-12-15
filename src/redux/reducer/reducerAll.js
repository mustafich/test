import {combineReducers, createStore} from "redux";
import reducerGlobal from "./reducer-global";
import {composeWithDevTools} from "redux-devtools-extension"
let reducers = combineReducers({
    reducerGlobal,
});
let store = createStore(
    reducers,
    composeWithDevTools(),

);

export default store;