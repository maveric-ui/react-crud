import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer }  from '../reducers/RootReducer';

const middleware = applyMiddleware(thunk, logger);
export const store = createStore(rootReducer, middleware);