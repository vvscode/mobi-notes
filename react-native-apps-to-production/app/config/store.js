import { AsyncStorage as storage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducer from '../reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(reducer, compose(applyMiddleware(...middleware), autoRehydrate()));

persistStore(store, {
  storage,
  blacklist: ['network'],
});

sagaMiddleware.run(rootSaga);

export default store;
