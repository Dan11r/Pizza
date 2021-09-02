import axios from "axios";

export const setPizzas = (payload) => ({
  type: 'SET-PIZZAS',
    payload
})
export const isloading = (payload) =>({
  type: 'SET-IS-LOADING',
  payload
})
export const fetchPizzas = (category, sortBy, order) => async (dispatch) =>{
  dispatch(isloading(true))
    let data = await axios.get(`http://localhost:3000/pizzas${category !== null ? '?category=' + category + '&':'?'}_sort=${sortBy}&_order=${order}`).then(res => res.data)
    dispatch(setPizzas(data))
  //http://localhost:3001/pizzas?category=3&_sort=rating&_order=asc
  dispatch(isloading(false))
}