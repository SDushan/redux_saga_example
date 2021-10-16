import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../src/sagas/rootSaga';
import reducers from '../src/reducers';
import ProductsScreen from '../src/screens/ProductsScreen';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <ProductsScreen />
    </Provider>
  );
}

sagaMiddleware.run(rootSaga);
