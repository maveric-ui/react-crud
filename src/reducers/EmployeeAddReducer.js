import {
  EMPLOYEE_ADDING,
  EMPLOYEE_ADD_SUCCESS,
  EMPLOYEE_ADD_FAIL
} from '../actions/EmployeeAddAction';

const initialState = {
  employee: {},
  error: null,
  isLoading: false,
};

export const employeeAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEE_ADDING:
      return {...state, isLoading: true, error: null};

    case EMPLOYEE_ADD_SUCCESS:
      return {...state, isLoading: false, employee: action.payload};

    case EMPLOYEE_ADD_FAIL:
      return {...state, isLoading: false, error: action.payload};

    default:
      return state
  }
};

