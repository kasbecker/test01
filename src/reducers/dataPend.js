import { GET_DATA_PEND, DATA_ERROR } from '../actions/types';

const intialState = {
  pends: [],
  pend: {}
};

export default (state = intialState, action) => {
  switch (action.type) {
    case GET_DATA_PEND:
      return { ...state, pend: action.payload, errorMessage: '' };
    case DATA_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};
