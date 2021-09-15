import * as types from "../actions/actionTypes";

export default function addToCartReducer(state = [], action) {
  switch (action.type) {
    case types.ADD_TO_CART:
      return [...state, { ...action.item }];
    default:
      return state;
  }
}
