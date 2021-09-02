import {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";

import {Header} from "./components";
import Home from './pages/Home'
import Cart from './pages/Cart'

import {Route, Switch, Redirect} from "react-router-dom"
import axios from 'axios'

import {fetchPizzas, setPizzas} from './redux/actions/Pizzas'



function App() {
  const [category, sortBy, order] = useSelector(state => [state.filter.category, state.filter.sortBy, state.filter.order])
  const dispatch = useDispatch()
  window.test = function (){
    axios.get('http://localhost:3001/pizzas').then(res => dispatch(setPizzas(res.data)))
  }

  useEffect( () => {
    dispatch(fetchPizzas(category, sortBy, order))
    // eslint-disable-next-line
  },[category, sortBy, order])
  return (
      <div className="wrapper">
        <Header/>
  <div className="content">
    <Switch>
      <Route path={'/home'} component={Home} exact/>
      <Route path={'/cart'} component={Cart} exact/>
      <Redirect to={'/home'}/>
    </Switch>
  </div>
</div>
);
}

export default App;