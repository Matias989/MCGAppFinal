import { combineReducers } from 'redux';
import productsReducer from './product/productReducer';
import loginReducer from './login/loginReducer';

export default combineReducers({
  products: productsReducer,
  login: loginReducer
});
