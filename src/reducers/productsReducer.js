import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILED,
} from "../actions";

const initialState = {
  isFetchingProducts: false,
  isErrorFetchingProducts: false,
  products: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        isFetchingProducts: true
      };
    case FETCH_PRODUCTS_SUCCESS:
      const { receivedProducts } = action;
      return {
        ...state,
        isFetchingProducts: false,
        products: receivedProducts
      };
    case FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isFetchingProducts: false,
        isErrorFetchingProducts: true
      };
    default:
      return state;
  }
};

export default productsReducer;
