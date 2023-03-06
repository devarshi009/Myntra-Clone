// Cart Actions here
import axios from "axios";
import {
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  RESET_CART_ITEMS,
  UPDATE_CART_ITEMS_ERROR,
  UPDATE_CART_ITEMS_LOADING,
  UPDATE_CART_ITEMS_SUCCESS,
} from "./actionType";

export const getProducts = () => async (dispatch) => {
  dispatch({ type: GET_CART_ITEMS_LOADING });
  try {
    let res = await axios.get(`https://healthy-pike-sarong.cyclic.app/cart`);
    console.log(res, "response");
    dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: res });
  } catch (e) {
    dispatch({ type: GET_CART_ITEMS_ERROR, payload: e.message });
  }
};

export const addProducts = (item) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_LOADING });
  try {
    let res = await axios.post(
      `https://healthy-pike-sarong.cyclic.app/cart/postcart`,
      item
    );
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: res });
  } catch (e) {
    dispatch({ type: ADD_ITEM_TO_CART_ERROR, payload: e.message });
  }
};
export const updateProducts = (id, changes) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEMS_LOADING });
  try {
    let res = await axios.patch(`https://healthy-pike-sarong.cyclic.app/cart`, {
      id,
      changes,
    });
    dispatch({ type: UPDATE_CART_ITEMS_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: UPDATE_CART_ITEMS_ERROR, payload: e.message });
  }
};
export const deleteProducts = (id) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEMS_LOADING });
  try {
    let res = await axios.delete(
      `https://healthy-pike-sarong.cyclic.app/cart`,
      id
    );
    dispatch({ type: REMOVE_CART_ITEMS_SUCCESS, payload: res.id });
  } catch (e) {
    dispatch({ type: REMOVE_CART_ITEMS_ERROR, payload: e.message });
  }
};

export const reset = () => ({ type: RESET_CART_ITEMS });
