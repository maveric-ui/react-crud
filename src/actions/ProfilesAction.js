import axios from 'axios';

export const PROFILES_REQUEST = "PROFILES_REQUEST";
export const PROFILES_REQUEST_SUCCESS = "PROFILES_REQUEST_SUCCESS";
export const PROFILES_REQUEST_FAIL = "PROFILES_REQUEST_FAIL";

export const EMPLOYEE_ADD_SUCCESS = "EMPLOYEE_ADD_SUCCESS";
export const EMPLOYEE_ADD_FAIL = "EMPLOYEE_ADD_FAIL";
export const EMPLOYEE_ADDED = "EMPLOYEE_ADDED";

export const getProfiles = () => {
  return dispatch => {
    dispatch({
      type: PROFILES_REQUEST
    });

    setTimeout(() => {
      axios.get('http://localhost:3200/profiles')
          .then((response) => {
            dispatch({
              type: PROFILES_REQUEST_SUCCESS,
              payload: response.data,
            });
          })
          .then(() => {
            dispatch({
              type: EMPLOYEE_ADDED,
              payload: addEmployee(),
            })
          })
          .catch(() => {
            dispatch({
              type: PROFILES_REQUEST_FAIL,
              error: true,
              payload: new Error('failed'),
            })
          })
    }, 1000);
  }
};

export const addEmployee = newEmployee => {
  return dispatch => {
    axios.post('http://localhost:3200/profiles', newEmployee)
        .then((newEmployee) => {
          dispatch({
            type: EMPLOYEE_ADD_SUCCESS,
            payload: newEmployee,
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