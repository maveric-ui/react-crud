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
  order: "",
  orderBy: "",
};

export const profilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILES_REQUEST:
      return {...state, isLoading: true, error: null};

    case PROFILES_REQUEST_SUCCESS:
      return {...state, isLoading: false, profiles: action.payload};

    case PROFILES_SEARCH:
      return {...state, profiles: action.payload};

    case PROFILES_SORT:
    const sortProfiles = (orderBy, order, profiles) =>{
      debugger
        function compare(a,b) {
          if(a[orderBy] < b[orderBy]) {
            return -1;
          }
          if(a[orderBy] > b[orderBy]) {
            return 1;
          }
          return 0
        }

        if(order === "") {
          state.profiles = profiles.slice().sort(compare);
        } else if(order === "asc") {
          state.profiles = profiles.slice().sort(compare).reverse();
        } else if(order === "desc") {
          state.profiles = profiles
        }
      };

      return {...state, profiles: sortProfiles(state.orderBy, state.order, state.profiles)};

    case EMPLOYEE_ADD:
      return {...state, profiles: [...state.profiles, action.payload.data]};

    case EMPLOYEE_UPDATE:
      return {...state, profiles: state.profiles
            .map((profile) => profile.id === action.payload.id ? action.payload : profile)};

    case EMPLOYEE_DELETE:
      return {...state, profiles: state.profiles.filter((profile) =>  profile.id !== action.payload)};

    case PROFILES_REQUEST_FAIL:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state
  }
};

