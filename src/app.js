import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Productos from './components/Productos';

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={Login} />
      <Route exact path={'/Home'} component={Home} />
      <Route exact path={'/Productos'} component={Productos} />
    </Router>
  );
}

export default App; 