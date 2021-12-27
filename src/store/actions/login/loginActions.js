import client from '../../../config/axios';
import {
    LOGIN_SUCCESS,
    LOGIN_ERROR
} from '../../../types/login';

const userUrl = '/login';

export function handleLogin(email, password) {
  return async (dispatch) => {

    const req = {
      email: email,
      password: password
    }
    try {
      const res = await client.get(`${userUrl}`,req);
      
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
