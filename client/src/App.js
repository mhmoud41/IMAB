import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Products from './components/products/products'
import Product from './components/product/product'
import AddProduct from './components/product-form/AddProduct';
import Footer from './components/layout/Footer'

import { Provider } from 'react-redux';
import store from './store';
import './App.css';
const App = () => {
  
return (
  
<Provider store = {store}>
<Router>
    <Fragment>
      <Navbar/>
      <Switch>
      <Route exact path ='/addproduct' component={AddProduct}/>
      <Route exact path='/' component={Products} />
      <Route exact path='/product/:id' component={Product} />
      </Switch>
      <Footer/>
    </Fragment>
    </Router>
    </Provider>
);
}
export default App;
