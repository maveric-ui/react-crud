import axios from 'axios';

export const PROFILES_REQUEST = "PROFILES_REQUEST";
export const PROFILES_REQUEST_SUCCESS = "PROFILES_REQUEST_SUCCESS";
export const PROFILES_REQUEST_FAIL = "PROFILES_REQUEST_FAIL";
export const EMPLOYEE_ADD_SUCCESS = "EMPLOYEE_ADD_SUCCESS";
export const EMPLOYEE_DELETE = "EMPLOYEE_DELETE";

const url = 'http://localhost:3200/profiles';


export const getProfiles = () => {
  return dispatch => {
    dispatch({
      type: PROFILES_REQUEST
    });

    setTimeout(() => {
      axios.get(url)
          .then((response) => {
            dispatch({
              type: PROFILES_REQUEST_SUCCESS,
              payload: response.data,
            });
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
    axios.post(url, newEmployee)
        .then((newEmployee) => {
          dispatch({
            type: EMPLOYEE_ADD_SUCCESS,
            payload: newEmployee,
          });
        })
  }
};

export const deleteEmployee = employeeID => {
  return dispatch => {
    axios.delete(`${url}/${employeeID}`, {data: employeeID})
        .then((res) => {
          dispatch({
            type: EMPLOYEE_DELETE,
            payload: res.config.data
          });
        })
        .catch(() => {
          return new Error('failed')
        })
  }

};