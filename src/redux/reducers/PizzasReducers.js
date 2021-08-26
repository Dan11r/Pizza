
const initState = {
    pizzasItems : [],
    isLoading : false
}

const PizzasReducers = (state= initState, action) => {
    switch (action.type) {
        case 'SET-PIZZAS':
            return{
                ...state,
                pizzasItems: action.payload
            }
        case  'SET-IS-LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export default PizzasReducers;