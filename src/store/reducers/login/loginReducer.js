import {
    ON_CHANGE_EMAIL,
    ON_CHANGE_PASSWORD,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../../../types/login';
  
  var initialState = {
    login: null,
    logged: false,
    message: undefined,
    isLogging: false
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
        case ON_CHANGE_EMAIL:
            return {
              ...state,
              email: action.payload,
              logged: false,
              message: undefined
            }
          case ON_CHANGE_PASSWORD:
            return {
              ...state,
              password: action.payload,
              logged: false,
              message: undefined
            }
          case LOGIN_PENDING: 
            return {
              ...state,
              isLogging: true
            }
          case LOGIN_SUCCESS: 
            return {
              ...state,
              isLogging:false,
              message: action.payload.message,
              logged: action.payload.success,
            }
          
          case LOGIN_ERROR: 
            return {
              ...state,
              isLogging:false,
              message: action.payload.message,
            }
          default:
            return state
    }
  }
  
  