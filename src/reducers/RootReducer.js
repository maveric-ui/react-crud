import { combineReducers } from 'redux';
import { profilesReducer } from './ProfilesReducer';
import { notificationsReducer } from './NotificationReducer';
import { facebookLoginReducer } from './FacebookLoginReducer';

export const rootReducer = combineReducers({
  profilesReducer: profilesReducer,
  notificationsReducer: notificationsReducer,
  facebookLoginReducer: facebookLoginReducer,
});