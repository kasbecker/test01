import axios from 'axios';
import { AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_ERROR } from './types';

export const login = data => {
  console.log('ini data in action', data);
  return async dispacth => {
    try {
      const res = await axios.post(
        'http://localhost:8000/apis/users/signIn',
        data
      );
      console.log('res', res);
      dispacth({
        type: AUTH_SIGN_IN,
        payload: res.data.token
      });
      localStorage.setItem('JWT_TOKEN', res.data.token);
    } catch (error) {
      dispacth({
        type: AUTH_ERROR,
        payload: 'username or password is not valid'
      });
      console.log('error', error);
    }
  };
};

export const logOut = () => {
  return dispacth => {
    localStorage.removeItem('JWT_TOKEN');
    dispacth({
      type: AUTH_SIGN_OUT,
      payload: ''
    });
  };
};
