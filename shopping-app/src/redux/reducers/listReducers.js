import * as types from "../actions/actionTypes";

export default function loadProductsReducer(
  state = { list: [], page: 1, paginatedList: [] },
  action
) {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      const fullList = action.products.products;
      return {
        ...state,
        list: fullList,
        paginatedList: fullList.slice(0, state.page * 7),
      };
    default:
      return state;
  }
}
