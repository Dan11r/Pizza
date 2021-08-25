const initState = {
    category : 0,
    isLoaded : false
}

const CategoriesReducer = (state= initState, actions) => {
    switch (actions.type) {
        case 'SET-CATEGORY':
            return{
                ...state,
                PizzasItems: actions.payload
            }
        default:
            return state
    }
}

export default PizzasReducers;