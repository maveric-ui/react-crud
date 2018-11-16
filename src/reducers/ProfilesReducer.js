import {
  PROFILES_REQUEST,
  PROFILES_REQUEST_SUCCESS,
  PROFILES_REQUEST_FAIL,
  EMPLOYEE_ADD, EMPLOYEE_DELETE, PROFILES_SEARCH, EMPLOYEE_UPDATE, PROFILES_SORT,
} from '../actions/ProfilesAction';

const initialState = {
  profiles: [],
  employee: {},
  error: null,
  isLoading: false,
  order: "asc",
  orderBy: "",
};

export const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILES_REQUEST:
      return {...state, isLoading: true, error: null};

    case PROFILES_REQUEST_SUCCESS:
      return {...state, isLoading: false, profiles: action.payload};

    case PROFILES_REQUEST_FAIL:
      return {...state, isLoading: false, error: action.payload};

    case PROFILES_SEARCH:
      return {...state, profiles: action.payload};

    case PROFILES_SORT:
      return {...state, profiles: action.payload};

    case EMPLOYEE_ADD:
      return {...state, profiles: [...state.profiles, action.payload.data]};

    case EMPLOYEE_UPDATE:
      return {...state, profiles: state.profiles
            .map((profile) => profile.id === action.payload.id ? action.payload : profile)};

    case EMPLOYEE_DELETE:
      return {...state, profiles: state.profiles.filter((profile) =>  profile.id !== action.payload)};



    default:
      return state
  }
};

