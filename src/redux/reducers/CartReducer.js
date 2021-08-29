const initState = {
    items: {},
    totalCount: 0,
    totalPrice: 0
}

const CartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET-PIZZA': {
            let currentId = action.id
            const newItems = {
                items: {
                    ...state.items,
                    [action.id]: state.items[action.id] ? [...state.items[action.id] , action] : [action]}
            }
            let totalCount = [].concat.apply([], Object.values(newItems.items)).length
            let totalPrice = [].concat.apply([], Object.values(newItems.items))
                .reduce((num, obj) => obj.price + num, 0)

            return {
                ...state,
                items: newItems.items,
                totalCount: totalCount,
                totalPrice: totalPrice
            }
        }
        default:
            return state
    }
}

export default CartReducer;