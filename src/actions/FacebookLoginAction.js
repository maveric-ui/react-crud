export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_REQUEST_SUCCESS = "LOGIN_REQUEST_SUCCESS";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";


export const facebookLogIn = (response) => {
  return dispatch => {
    dispatch({type: LOGIN_REQUEST});

    dispatch({
      type: LOGIN_REQUEST_SUCCESS,
      payload: response,
    })
  }
};

export const facebookLogOut = (response) => {
  return dispatch => {
    dispatch({
      type: LOGOUT_REQUEST,
      payload: response
    })
  }
};









