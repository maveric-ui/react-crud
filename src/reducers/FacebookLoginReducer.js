import { LOGIN_REQUEST, LOGIN_REQUEST_SUCCESS, LOGOUT_REQUEST } from '../actions/FacebookLoginAction';

const initialState = {
  isLoggedIn: false,
  profile: {},
  tokenDetail: {},
  error: null,
};

export const facebookLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, isLoggedIn: false};

    case LOGIN_REQUEST_SUCCESS:
      return {...state, isLoggedIn: true, profile: action.payload.profile, tokenDetail: action.payload.tokenDetail};

    case LOGOUT_REQUEST:
      return {...state, isLoggedIn: false};

    default:
      return state;
  }
};