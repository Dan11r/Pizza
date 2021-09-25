import produce, { Draft } from "immer"
import {removePizzaItemType, clearCartType, setPizzaType, minusPizzaItemType, plusPizzaItemType} from "../actions/Cart";

interface pizzaItemType{
    type: string
    name: string
    id:number
    price:number
    PizzaType: string
    size:number
    url:string
}

interface itemType {
    pizza: Array<pizzaItemType>
    totalCount: number
    totalPrice: number
}
interface itemsType {
    key:itemType
}

const initState = {
    items: {} as any ,
    totalCount: 0,
    totalPrice: 0
}
export type cartType = typeof initState

type actionType =  setPizzaType & clearCartType & removePizzaItemType & plusPizzaItemType & minusPizzaItemType

const CartReducer = (state:cartType = initState, action: actionType) => {
    return produce<cartType, any>(state, draft => {
        const calcTotalSum = (type:string, action?: removePizzaItemType | plusPizzaItemType | minusPizzaItemType ) => {
            const arrOfPizzas = [].concat.apply([], Object.values((draft.items))) as Array<itemType>

            const lengthPizzaItem = action && state.items[action.payload].pizza.length
            switch (type) {
                case 'TOTAL-COUNT':
                    return arrOfPizzas.reduce((num, obj) => obj.totalCount + num, 0)
                case 'TOTAL-PRICE':
                    return arrOfPizzas.reduce((num, obj) => obj.totalPrice + num, 0)
                case 'MINUS-PIZZA':
                    return lengthPizzaItem - 1
                case 'PLUS-PIZZA':
                    return lengthPizzaItem + 1
                case'TOTAL-ITEM-PRICE':

                    return  action && draft.items[action.payload].pizza
                        .reduce((num:number, obj:pizzaItemType) => obj.price + num, 0)
                default:
            }
        }
        if (action.type === 'SET-PIZZA') {

            draft.items[action.id] = {
                pizza: [...draft.items[action.id] ?
                    [...draft.items[action.id].pizza, action]
                    : [action]],
                totalCount: draft.items[action.id] ? draft.items[action.id].pizza.length + 1 : 1
            }
            draft.items[action.id].totalPrice = draft.items[action.id] ? draft.items[action.id].pizza
                .reduce((num:number, obj:pizzaItemType) => obj.price + num, 0) : action.price
            draft.totalCount = calcTotalSum('TOTAL-COUNT')
            draft.totalPrice = calcTotalSum('TOTAL-PRICE')
        } else if (action.type === 'CLEAR-CART') {
            draft.items = {}
            draft.totalCount = 0
            draft.totalPrice = 0
        } else if (action.type === 'REMOVE-PIZZA-ITEM') {
            delete draft.items[action.payload]
            draft.totalCount = calcTotalSum('TOTAL-COUNT')
            draft.totalPrice = calcTotalSum('TOTAL-PRICE')
        } else if (action.type === 'PLUS-PIZZA-ITEM') {
            draft.items[action.payload].pizza.push(draft.items[action.payload].pizza[0])
            draft.items[action.payload].totalCount = calcTotalSum('PLUS-PIZZA', action)
            draft.items[action.payload].totalPrice = calcTotalSum('TOTAL-ITEM-PRICE', action)
            draft.totalCount = calcTotalSum('TOTAL-COUNT')
            draft.totalPrice = calcTotalSum('TOTAL-PRICE')
        } else if (action.type === 'MINUS-PIZZA-ITEM') {
            if (state.items[action.payload].pizza.length > 1) {
                draft.items[action.payload].pizza.pop()
                draft.items[action.payload].totalCount = calcTotalSum('MINUS-PIZZA', action)
                draft.items[action.payload].totalPrice = calcTotalSum('TOTAL-ITEM-PRICE', action)
            }
            draft.totalCount = calcTotalSum('TOTAL-COUNT')
            draft.totalPrice = calcTotalSum('TOTAL-PRICE')
        }
    })
}

export default CartReducer;