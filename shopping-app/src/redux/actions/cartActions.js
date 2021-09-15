import * as types from "./actionTypes";
export function addToCartAction(item) {
  return { type: types.ADD_TO_CART, item };
}
