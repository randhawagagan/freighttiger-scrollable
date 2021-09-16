import * as types from "../actions/actionTypes";

export default function loadProductsReducer(
  state = {
    list: [],
    cart: [],
  },
  action
) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.products.products,
      };
    case types.ADD_TO_CART:
      return {
        ...state,
        cart: action.item,
      };
    default:
      return state;
  }
}
