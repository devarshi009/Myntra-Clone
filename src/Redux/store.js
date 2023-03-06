import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducer } from "./Cart/reducer";
import { reducer } from "./Products/reducer";
// import {cartreducer} from "./Cart/reducer"
let rootReducer = combineReducers({
  productsManager: reducer,
  cartManager: cartReducer,
});
export const store = legacy_createStore(
  rootReducer,

  applyMiddleware(thunk)
);
