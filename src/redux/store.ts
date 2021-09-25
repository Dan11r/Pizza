import { createStore, compose, applyMiddleware} from 'redux'
import thunk from "redux-thunk";

import {rootReducer} from './reducers'


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>;

export default store;