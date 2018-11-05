import {
  PROFILES_REQUEST,
  PROFILES_REQUEST_SUCCESS,
  PROFILES_REQUEST_FAIL,
  EMPLOYEE_ADDED,
} from '../actions/ProfilesAction';

const initialState = {
  profiles: [],
  employee: {},
  error: null,
  isLoading: false,
};

export const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILES_REQUEST:
      return {...state, isLoading: true, error: null};

    case PROFILES_REQUEST_SUCCESS:
      return {...state, isLoading: false, profiles: action.payload};

    case EMPLOYEE_ADDED:
      return {...state, isLoading: false, profiles: action.payload};

    case PROFILES_REQUEST_FAIL:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state
  }
};

