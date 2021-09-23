import produce from "immer"

const initState = {
    items: {
    },
    totalCount: 0,
    totalPrice: 0
}


const CartReducer = (state = initState, action) => {
    return produce(state, draft => {
        const calcTotalSum = (type) =>{
            const arrOfPizzas = [].concat.apply([], Object.values((draft.items)) )
            switch (type){
                case 'TOTAL-COUNT':
                    return arrOfPizzas.reduce((num, obj) => obj.totalCount + num, 0)
                case 'TOTAL-PRICE':
                    return arrOfPizzas.reduce((num, obj) => obj.totalPrice + num, 0)
                default:
            }
        }
        if(action.type === 'SET-PIZZA'){
            draft.items[action.id] = {
                pizza: [...draft.items[action.id] ?
                    [...draft.items[action.id].pizza, action]
                    : [action]],
                totalCount: draft.items[action.id] ? draft.items[action.id].pizza.length + 1 : 1
            }
            draft.items[action.id].totalPrice = draft.items[action.id] ? draft.items[action.id].pizza
                 .reduce((num, obj) => obj.price + num, 0) : action.price
            draft.totalCount = calcTotalSum('TOTAL-COUNT')
            draft.totalPrice = calcTotalSum('TOTAL-PRICE')
        }
        else if(action.type === 'CLEAR-CART'){
            draft.items = {}
            draft.totalCount = 0
            draft.totalPrice = 0
        }
        else if(action.type === 'REMOVE-PIZZA-ITEM'){
            delete draft.items[action.payload]
            draft.totalCount = calcTotalSum('TOTAL-COUNT')
            draft.totalPrice = calcTotalSum('TOTAL-PRICE')
        }
        else if(action.type === 'PLUS-PIZZA-ITEM'){
           draft.items[action.payload].pizza.push(draft.items[action.payload].pizza[0])
           draft.items[action.payload].totalCount = state.items[action.payload].pizza.length + 1
            draft.items[action.payload].totalPrice = draft.items[action.payload].pizza
                .reduce((num, obj) => obj.price + num, 0)
            draft.totalCount = calcTotalSum('TOTAL-COUNT')
            draft.totalPrice = calcTotalSum('TOTAL-PRICE')
        }
        else if(action.type === 'MINUS-PIZZA-ITEM'){
            if(state.items[action.payload].pizza.length > 1){
                draft.items[action.payload].pizza.pop()
                draft.items[action.payload].totalCount = state.items[action.payload].pizza.length - 1
                draft.items[action.payload].totalPrice = draft.items[action.payload].pizza
                    .reduce((num, obj) => obj.price + num, 0)
            }
            draft.totalCount = calcTotalSum('TOTAL-COUNT')
            draft.totalPrice = calcTotalSum('TOTAL-PRICE')
        }
    })

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