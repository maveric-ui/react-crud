import {
  PROFILES_REQUEST,
  PROFILES_REQUEST_SUCCESS,
  PROFILES_REQUEST_FAIL,
  EMPLOYEE_ADD, EMPLOYEE_DELETE, PROFILES_SEARCH,
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

    case PROFILES_SEARCH:
      return {...state,isLoading: false, profiles: action.payload};

    case EMPLOYEE_ADD:
      return {...state, isLoading: false, profiles: [...state.profiles, action.payload.data]};

    case EMPLOYEE_DELETE:
      const filterProfiles = state.profiles.filter((profile) => {
        return profile.id !== action.payload
      });
      return {...state, isLoading: false, profiles: filterProfiles};

    case PROFILES_REQUEST_FAIL:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state
  }
};

