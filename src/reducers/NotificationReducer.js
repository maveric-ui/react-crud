import {
  NOTIFICATIONS_REQUEST,
  NOTIFICATIONS_REQUEST_SUCCESS,
  NOTIFICATIONS_REQUEST_FAIL
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
      return {...state, notifications: action.payload.reverse()};

    case NOTIFICATIONS_REQUEST_FAIL:
      return {...state, error: action.payload};

    default:
      return state;
  }

};