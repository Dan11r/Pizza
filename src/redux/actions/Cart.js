
export const setPizza = (payload) =>({
    type: 'SET-PIZZA',
    name:payload.name,
    id:payload.id,
    price:payload.price,
    PizzaType:payload.type,
    size:payload.size,
    url: payload.imageUrl
})
export const clearCart = () =>({
    type: 'CLEAR-CART',
})
export const removePizzaItem = (payload) =>({
    type: 'REMOVE-PIZZA-ITEM',
    payload
})
export const plusPizzaItem = (payload) =>({
    type: 'PLUS-PIZZA-ITEM',
    payload
})
export const minusPizzaItem = (payload) =>({
    type: 'MINUS-PIZZA-ITEM',
    payload
})