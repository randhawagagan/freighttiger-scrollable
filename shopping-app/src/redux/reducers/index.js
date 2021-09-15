import { combineReducers } from "redux";
import addToCart from "./cartReducers";
import loadProductsReducer from "./listReducers";

const rootReducer = combineReducers({
  addToCart,
  products: loadProductsReducer,
});

export default rootReducer;
