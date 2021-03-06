import {
  NOTIFICATIONS_REQUEST,
  NOTIFICATIONS_REQUEST_SUCCESS,
  NOTIFICATIONS_REQUEST_FAIL, NOTIFICATION_ADD, NOTIFICATION_DELETE
} from '../actions/NotificationsAction';

const initialState = {
  notifications: [],
  error: null,
};

export const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTIFICATIONS_REQUEST:
      return {...state, error: null};

    case NOTIFICATIONS_REQUEST_SUCCESS:
      return {...state, notifications: action.payload};

    case NOTIFICATIONS_REQUEST_FAIL:
      return {...state, error: action.payload};

    case NOTIFICATION_ADD:
      return {...state, notifications: [...state.notifications, action.payload.data]};

    case NOTIFICATION_DELETE:
      return {...state, notifications: state.notifications.filter((notification) => notification.id !== action.payload)};

    default:
      return state;
  }
};