import {combineReducers} from 'redux'
import PizzasReducers from "./PizzasReducers";
import FilterReducer from "./FilterReducer";
export const rootReducer = combineReducers({
    pizzas: PizzasReducers,
    filter: FilterReducer
})
