import * as types from "../actions/actionTypes";

export default function loadProductsReducer(
  state = {
    list: [],
    page: 1,
    paginatedList: [],
    hasNextPage: true,
    isNextPageLoading: false,
  },
  action
) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.products.products,
      };
    default:
      return state;
  }
}
