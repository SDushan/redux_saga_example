import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products';

export const getProducts = () => {
  return axios.get(BASE_URL);
};
