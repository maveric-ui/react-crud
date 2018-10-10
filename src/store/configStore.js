import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { profileReducer }  from '../reducers/ProfileReducer';

const middleware = applyMiddleware(thunk, logger);
export const store = createStore(profileReducer, middleware);