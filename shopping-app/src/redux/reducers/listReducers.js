import * as types from "../actions/actionTypes";
import { getFromCache } from "../actions/listActions";
import * as CONSTANTS from "../../utils/constants";

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

    case types.LOAD_NEXT_ON_SCROLL:
      const cachedVal = getFromCache(CONSTANTS.PRODUCTS_CACHE);
      return {
        ...state,
        page: action.page,
        paginatedList: cachedVal.products.slice(0, action.page * 7),
      };

    case types.INCREMENT_PAGENUMBER:
      // const cachedVal = getFromCache(CONSTANTS.PRODUCTS_CACHE);
      return {
        ...state,
        page: action.page,
        paginatedList: cachedVal.products.slice(0, action.page * 7),
      };

    default:
      return state;
  }
}
