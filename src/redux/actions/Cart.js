
export const setPizza = (payload) =>({
    type: 'SET-PIZZA',
    name:payload.name,
    id:payload.id,
    price:payload.price,
    PizzaType:payload.type,
    size:payload.size,
    url: payload.imageUrl

})
