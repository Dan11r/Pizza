import { createStore, compose, applyMiddleware} from 'redux'
import thunk from "redux-thunk";

import PizzasReducers from './reducers/PizzasReducers'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(PizzasReducers, composeEnhancers(applyMiddleware(thunk)))

export default store;