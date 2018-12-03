import { LOGIN_REQUEST, LOGIN_REQUEST_FAIL, LOGIN_REQUEST_SUCCESS } from '../actions/FacebookLoginAction';

const initialState = {
  isLoggedIn: false,
  user: {},
  error: false,
};

export const facebookLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state};

    case LOGIN_REQUEST_SUCCESS:
      return {...state, isLoggedIn: true, user: action.payload};

    case LOGIN_REQUEST_FAIL:
      return {...state, isLoggedIn: false, error: action.payload};

    default:
      return state;
  }
};