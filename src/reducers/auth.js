import { AUTH_SIGN_IN, AUTH_SIGN_OUT, AUTH_ERROR } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  token: localStorage.getItem('token'),
  errorMessage: '',
  isLoading: false,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SIGN_IN:
      console.log('[AuthReducer] got an AUTH SIGN_IN action');
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        errorMessage: '',
        user: action.payload
      };
    case AUTH_SIGN_OUT:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: false,
        errorMessage: ''
      };
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
