import {useEffect, useState} from 'react'
import {useDispatch} from "react-redux";

import {Header, SortPopup, Categories} from "./components";
import Home from './pages/Home'
import Cart from './pages/Cart'

import {Route, Switch, Redirect} from "react-router-dom"
import axios from 'axios'

import {fetchPizzas, setPizzas} from './redux/actions/Pizzas'



function App() {
  const dispatch = useDispatch()
  window.test = function (){
    axios.get('http://localhost:3001/pizzas').then(res => dispatch(setPizzas(res.data)))
  }

  useEffect( () => {
    dispatch(fetchPizzas())
  },[])
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