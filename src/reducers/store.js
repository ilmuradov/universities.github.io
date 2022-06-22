import { applyMiddleware, combineReducers, createStore } from "redux";
// import { configureStore } from "redux-toolkit"
import thunk from "redux-thunk";
import bodyReducer from "./body-reducer";

const reducers = combineReducers({
    body: bodyReducer
})

export let store = createStore(reducers, applyMiddleware(thunk))

window.store = store