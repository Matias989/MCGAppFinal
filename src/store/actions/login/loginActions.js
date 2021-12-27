import {
    ON_CHANGE_EMAIL,
    ON_CHANGE_PASSWORD,
    LOGIN_PENDING,
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../../../types/login';
  
  export const handleLogin = (email, password) => {
    return (dispatch) => {
      dispatch({
        type: LOGIN_PENDING
      })
  
      const options = {
        baseURL: 'https://trabajo-mcga-server-marc.herokuapp.com/',
        timeout: 25000,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
      }
  
      return fetch(`https://trabajo-mcga-server-marc.herokuapp.com/login`, {
        ...options, body: JSON.stringify({ email, password }) 
      })
        .then(res => res.json())
        .then (data => { 
          if(!data.success) {
            return Promise.reject(data) 
          }
          return dispatch({
            type:LOGIN_SUCCESS,
            payload: data,
          })
        })
        .catch (error => {
          return dispatch({
            type:LOGIN_ERROR,
            payload: error
          })
        })
      }
  }
  