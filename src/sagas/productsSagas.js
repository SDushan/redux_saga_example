import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from '../actions';
import { put, call, takeLatest } from 'redux-saga/effects';
import { getProducts } from '../services';

export function* fetchProducts() {
  try {
    const receivedProducts = yield call(getProducts);
    yield put({
      type: FETCH_PRODUCTS_SUCCESS,
      receivedProducts: receivedProducts.data,
    });
  } catch (error) {
    yield put({ type: FETCH_PRODUCTS_FAILED, error });
  }
}

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS, fetchProducts);
}
