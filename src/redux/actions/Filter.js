
export const setСategory = (payload) =>({
    type: 'SET-CATEGORY',
    payload
})
export const setSortBy = (payload) =>({
    type: 'SET-SORT',
    sortBy: payload.type,
    order: payload.order
})