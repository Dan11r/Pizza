import produce from "immer"

const initState = {
    items: {
    },
    totalCount: 0,
    totalPrice: 0
}


const CartReducer = (state = initState, action) => {
    return produce(state, draft => {
        if(action.type === 'SET-PIZZA'){
            draft.items[action.id] = {
                pizza: [...draft.items[action.id] ?
                    [...draft.items[action.id].pizza, action]
                    : [action]],
                totalCount: draft.items[action.id] ? draft.items[action.id].pizza.length + 1 : 1
            }
            draft.items[action.id].totalPrice = draft.items[action.id] ? draft.items[action.id].pizza
                 .reduce((num, obj) => obj.price + num, 0) : action.price
            draft.totalCount = draft.totalCount + 1
            draft.totalPrice = [].concat.apply([], Object.values(Object.values(draft.items))) // надо брать ключи и сними уже что то делать
                       .reduce((num, obj) => obj.price + num, 0)
        }})

    // switch (action.type) {
    //     case 'SET-PIZZA': {
    //         let currentId = action.id
    //         const newItems = {
    //             items: {
    //                 ...state.items,
    //                 [action.id]: state.items[action.id] ? [...state.items[action.id] , action] : [action]}
    //         }
    //         let totalCount = [].concat.apply([], Object.values(newItems.items)).length
    //         let totalPrice = [].concat.apply([], Object.values(newItems.items))
    //             .reduce((num, obj) => obj.price + num, 0)
    //
    //         return {
    //             ...state,
    //             items: newItems.items,
    //             totalCount: totalCount,
    //             totalPrice: totalPrice
    //         }
    //     }
    //     default:
    //         return state
    // }
}

export default CartReducer;