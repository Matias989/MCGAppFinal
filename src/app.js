import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Login from './components/login'
import Home from './components/home'
import Productos from './components/Products';
import ProductoNuevo from './components/Products/NewProduct';
import ProductoEditado from './components/Products/EditProduct';
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path={'/'} component={Login} />
        <Route exact path={'/Home'} component={Home} />
        <Route exact path={'/Productos'} component={Productos} />
        <Route exact path={'/Productos/New'} component={ProductoNuevo} />
        <Route exact path={'/Productos/Edit/:id'} component={ProductoEditado} />
      </Router>
    </Provider>
  );
}

export default App; 