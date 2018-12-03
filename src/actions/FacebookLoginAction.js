export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGIN_REQUEST_FAIL = "LOGIN_REQUEST_FAIL";

export const logIn = () => {
  return dispatch => {
    dispatch({type: LOGIN_REQUEST});


  }
};