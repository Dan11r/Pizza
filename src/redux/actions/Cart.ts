interface setPizzaPayloadType {
    type:string
    name:string
    id:number
    price:number
    size:number
    imageUrl:string
}

export const setPizza = (payload:setPizzaPayloadType) =>({
    type: 'SET-PIZZA' as string,
    name:payload.name as string,
    id:payload.id as number,
    price:payload.price as number,
    PizzaType:payload.type as string,
    size:payload.size as number,
    url: payload.imageUrl as string
})
export type setPizzaType = ReturnType<typeof setPizza>


export const clearCart = () =>({
    type: 'CLEAR-CART',
})
export type clearCartType = ReturnType<typeof clearCart>



export const removePizzaItem = (payload:number) =>({
    type: 'REMOVE-PIZZA-ITEM',
    payload: payload as number
})
export type removePizzaItemType = ReturnType<typeof removePizzaItem>


export const plusPizzaItem = (payload:number) =>({
    type: 'PLUS-PIZZA-ITEM',
    payload: payload as number
})
export type plusPizzaItemType = ReturnType<typeof plusPizzaItem>


export const minusPizzaItem = (payload:number) =>({
    type: 'MINUS-PIZZA-ITEM',
    payload: payload as number
})
export type minusPizzaItemType = ReturnType<typeof minusPizzaItem>
