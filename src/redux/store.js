import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducer';

// eslint-disable-next-line
const middlewares = new Array();
if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
};

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);

export default {store, persistor};