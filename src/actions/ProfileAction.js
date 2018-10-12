import axios from 'axios';

export const PROFILES_REQUEST = "PROFILE_REQUEST";
export const PROFILES_REQUEST_SUCCESS = "PROFILES_REQUEST_SUCCESS";
export const PROFILES_REQUEST_FAIL = "PROFILES_REQUEST_FAIL";


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
          .catch(() => {
            dispatch({
              type: PROFILES_REQUEST_FAIL,
              error: true,
              payload: new Error('failed'),
            })
          })
    }, 2000);


  }

};