import axios from 'axios';

export const EMPLOYEE_ADDING = "EMPLOYEE_ADDING";
export const EMPLOYEE_ADD_SUCCESS = "PROFILES_REQUEST_SUCCESS";
export const EMPLOYEE_ADD_FAIL = "PROFILES_REQUEST_FAIL";


export const addEmployee = newEmployee => {
  return dispatch => {
    dispatch({
      type: EMPLOYEE_ADDING
    });

    axios.post('http://localhost:3200/profiles', {
    })
        .then((response) => {
          dispatch({
            type: EMPLOYEE_ADD_SUCCESS,
            payload: console.log(response),
          });
        })
        .catch(() => {
          dispatch({
            type: EMPLOYEE_ADD_FAIL,
            error: true,
            payload: new Error('failed'),
          })
        })
  }

};