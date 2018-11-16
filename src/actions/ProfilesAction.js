import axios from 'axios';

export const PROFILES_REQUEST = "PROFILES_REQUEST";
export const PROFILES_REQUEST_SUCCESS = "PROFILES_REQUEST_SUCCESS";
export const PROFILES_REQUEST_FAIL = "PROFILES_REQUEST_FAIL";
export const EMPLOYEE_ADD = "EMPLOYEE_ADD";
export const PROFILES_SEARCH = "PROFILES_SEARCH";
export const EMPLOYEE_DELETE = "EMPLOYEE_DELETE";
export const EMPLOYEE_UPDATE = "EMPLOYEE_UPDATE";
export const PROFILES_SORT = "PROFILES_SORT";

const url = 'http://localhost:3200/profiles';

export const getProfiles = () => {
  return dispatch => {
    dispatch({
      type: PROFILES_REQUEST
    });
      axios.get(url)
          .then((response) => new Promise (() => {
            setTimeout(() => {
              dispatch({
                type: PROFILES_REQUEST_SUCCESS,
                payload: response.data,
              });
            }, 1500)
          }))
          .catch(() => {
            dispatch({
              type: PROFILES_REQUEST_FAIL,
              error: true,
              payload: new Error('failed'),
            })
          });
  }
};

export const searchEmployee = (searchKey) => {
  return dispatch => {
    axios.get(`${url}?q=${searchKey}`)
        .then((response) => {
          dispatch({
            type: PROFILES_SEARCH,
            payload: response.data,
          });
        })
        .catch(() => {
          return new Error('failed')
        });
  }
};

export const sortEmployee = (order, orderBy) => {
    return dispatch => {
      axios.get(url)
          .then((response) => {
            dispatch ({
              type: PROFILES_SORT,
              order: order,
              orderBy: orderBy,
              payload: response.data
            })
          })
          .catch(() => {
            return new Error('failed')
          });
    }
};

export const addEmployee = newEmployee => {
  return dispatch => {
    axios.post(url, newEmployee)
        .then((newEmployee) => {
          dispatch({
            type: EMPLOYEE_ADD,
            payload: newEmployee,
          });
        })
  }
};

export const updateEmployee = (employeeID, editedEmployee) => {
  return dispatch => {
    axios.put(`${url}/${employeeID}`, editedEmployee)
        .then((res) => {
          dispatch({
            type: EMPLOYEE_UPDATE,
            payload: res.data
          });
        })
        .catch(() => {
          return new Error('failed')
        });
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