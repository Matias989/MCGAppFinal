import client from '../../../config/axios';
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR
} from '../../../types/login';

const userUrl = '/login';

export function handleLogin(email, password) {
  return async (dispatch) => {

    const login = {
      email: email,
      password: password
    }

    console.log(login);
    try {
      const res = await client.post(`${userUrl}`,login);
      
      if(res.success){
        return Promise.reject(res) 
      }

      return dispatch({
        type:LOGIN_SUCCESS,
        payload: res,
      })
    } catch (error) {

      return dispatch({
        type:LOGIN_ERROR,
        payload: error
      })
    }
  };
}