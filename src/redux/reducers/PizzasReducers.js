
const initState = {
    PizzasItems : [],
    isLoading : false
}

const PizzasReducers = (state= initState, action) => {
    switch (action.type) {
        case 'SET-PIZZAS':
            return{
                ...state,
                PizzasItems: action.payload
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