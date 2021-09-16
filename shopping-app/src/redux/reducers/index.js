import { combineReducers } from "redux";
import loadProductsReducer from "./listReducers";

const rootReducer = combineReducers({
  products: loadProductsReducer,
});

export default rootReducer;
