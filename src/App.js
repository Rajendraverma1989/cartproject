import React from 'react';
import './App.css';
import { Switch, Route, Redirect} from 'react-router-dom';
import Header from './Header/header';
import Shopping from './shopping';
import { ShoppingCart } from './ShoppingCart'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
         <Route exact path='/' render={() =>  (<Shopping />)}  /> 
         <Route exact path='/cart' render={() =>  (<ShoppingCart />)}  /> cart
        </Switch>
      </div>
    );
  }
}
export default App;
