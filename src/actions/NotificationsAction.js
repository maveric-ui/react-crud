import axios from 'axios';

export const NOTIFICATIONS_REQUEST = "NOTIFICATIONS_REQUEST";
export const NOTIFICATIONS_REQUEST_SUCCESS = "NOTIFICATIONS_REQUEST_SUCCESS";
export const NOTIFICATIONS_REQUEST_FAIL = "NOTIFICATIONS_REQUEST_FAIL";

const url = 'http://localhost:3200/notifications';

export const getNotifications = () => {
  return dispatch => {
    dispatch({
      type: NOTIFICATIONS_REQUEST
    });

    axios.get(url)
        .then((response) => {
          dispatch({
            type: NOTIFICATIONS_REQUEST_SUCCESS,
            payload: response.data,
          })
        })
        .catch(() => {
          dispatch({
            type: NOTIFICATIONS_REQUEST_FAIL,
            error: true,
            payload: new Error('failed'),
          })
        });
  }
};