import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "./actionType";

const intialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, isLoading: true };
    case GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case GET_PRODUCTS_FAILURE:
      return { ...state, isLoading: false, isError: payload };
    default:
      return state;
  }
};
