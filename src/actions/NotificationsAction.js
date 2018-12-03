import axios from 'axios';

export const NOTIFICATIONS_REQUEST = "NOTIFICATIONS_REQUEST";
export const NOTIFICATIONS_REQUEST_SUCCESS = "NOTIFICATIONS_REQUEST_SUCCESS";
export const NOTIFICATIONS_REQUEST_FAIL = "NOTIFICATIONS_REQUEST_FAIL";
export const NOTIFICATION_ADD = "NOTIFICATIONS_ADD";
export const NOTIFICATION_DELETE = "NOTIFICATION_DELETE";

const url = 'http://localhost:3200/notifications';

export const getNotifications = () => {
  return dispatch => {
    dispatch({type: NOTIFICATIONS_REQUEST});

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

export const addNotification = newNotification => {
  return dispatch => {
    axios.post(url, newNotification)
        .then((newNotification) => {
          dispatch({
            type: NOTIFICATION_ADD,
            payload: newNotification
          })
        })
  }
};

export const deleteNotification = notificationID => {
  return dispatch => {
    axios.delete(`${url}/${notificationID}`, {data: notificationID})
        .then((res) => {
          dispatch({
            type: NOTIFICATION_DELETE,
            payload: res.config.data
          });
        })
        .catch(() => {
          return new Error('failed')
        })
  }
};