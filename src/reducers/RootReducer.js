import { combineReducers } from 'redux';
import { profilesReducer } from './ProfilesReducer';

export const rootReducer = combineReducers({
  profilesReducer: profilesReducer,
});