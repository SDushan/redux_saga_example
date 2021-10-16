import { all } from 'redux-saga/effects';
import { watchFetchProducts } from './productsSagas';

export default function* rootSaga() {
  yield all([watchFetchProducts()]);
}
