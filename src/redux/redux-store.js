import { combineReducers, createStore } from "redux";
import postsReducer from "./posts-reducer";
import regionsReducer from "./regions-reducer";

let reducers = combineReducers({
    postsPage: postsReducer,
    regions: regionsReducer
})
let store = createStore(reducers);

export default store;

window.store = store;