import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const saga = createSagaMiddleware();

const middleWare = [saga];

if (process.env.NODE_ENV === 'development') {
	middleWare.push(logger);
};

export const store = createStore(rootReducer, applyMiddleware(...middleWare));

saga.run(rootSaga);

export const persistor = persistStore(store);

export default store;