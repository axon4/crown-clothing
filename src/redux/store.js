import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { persistStore } from 'redux-persist';

const saga = createSagaMiddleware();

const middlewares = [saga];
if (process.env.NODE_ENV === 'development') {
	middlewares.push(logger);
};

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

saga.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};