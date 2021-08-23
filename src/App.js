import {useEffect, useState} from 'react'
import {Header, SortPopup, Categories} from "./components";
import Home from './pages/Home'
import Cart from './pages/Cart'
import {Route, Switch, Redirect} from "react-router-dom"
import axios from 'axios'

function App() {
  const [pizzas, setPizzas] = useState([])
  useEffect( () => {
    axios.get('http://localhost:3000/db.json').then(res => setPizzas(res.data))
  },[])
  return (
      <div className="wrapper">
        <Header/>
  <div className="content">
    <Switch>
      <Route path={'/home'} render={() => <Home pizzas={pizzas.pizzas}/>} exact/>
      <Route path={'/cart'} component={Cart} exact/>
      <Redirect to={'/home'}/>
    </Switch>
  </div>
</div>
);
}

export default App;