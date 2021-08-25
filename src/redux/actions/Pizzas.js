import axios from "axios";

export const setPizzas = (payload) => ({
  type: 'SET-PIZZAS',
    payload
})
export const isloading = (payload) =>({
  type: 'SET-IS-LOADING',
  payload
})
export const fetchPizzas = () => (dispatch) =>{
  dispatch(isloading(true))
    axios.get('http://localhost:3001/pizzas').then(res => dispatch(setPizzas(res.data)))
  dispatch(isloading(false))
}