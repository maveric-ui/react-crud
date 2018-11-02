import { combineReducers } from 'redux';
import { profileReducer } from './ProfileReducer';
import { employeeAddReducer } from './EmployeeAddReducer';

export const rootReducer = combineReducers({
  profileReducer: profileReducer,
  employeeAddReducer: employeeAddReducer,
});