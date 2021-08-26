const initState = {
    category : null,
    sortBy: 'rating',
    order: 'desc'
}

const FilterReducer = (state= initState, actions) => {
    switch (actions.type) {
        case 'SET-CATEGORY':
            return{
                ...state,
                category: actions.payload
            }
        case 'SET-SORT':
            return{
                ...state,
                sortBy: actions.sortBy,
                order:actions.order
            }
        default:
            return state
    }
}

export default FilterReducer;