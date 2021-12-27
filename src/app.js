import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Productos from './components/Products';
import { Provider } from 'react-redux'
import store from './store/index'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path={'/'} component={Login} />
        <Route exact path={'/Home'} component={Home} />
        <Route exact path={'/Productos'} component={Productos} />
      </Router>
    </Provider>
  );
}

export default App; 