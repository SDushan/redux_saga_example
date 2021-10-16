import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from './types';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchProductsSuccess = receivedProducts => ({
  type: FETCH_PRODUCTS_SUCCESS,
  receivedProducts,
});

export const fetchProductsFailed = error => ({
  type: FETCH_PRODUCTS_FAILED,
  error,
});
