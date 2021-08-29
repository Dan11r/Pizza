import {combineReducers} from 'redux'
import pizzas from "./PizzasReducers";
import filter from "./FilterReducer";
import cart from "./CartReducer";
export const rootReducer = combineReducers({
    pizzas,
    filter,
    cart
})
