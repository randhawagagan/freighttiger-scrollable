import * as types from "./actionTypes";
import * as CONSTANTS from "../../utils/constants";

export function loadCoursesSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function loadNextPageOnScroll(page) {
  return { type: types.LOAD_NEXT_ON_SCROLL, page };
}

export function increment_pagenumber(page) {
  return { type: types.INCREMENT_PAGENUMBER, page };
}

export function loadItems() {
  return function (dispatch) {
    const cachedVal = getFromCache(CONSTANTS.PRODUCTS_CACHE);
    if (cachedVal) {
      dispatch(loadCoursesSuccess(cachedVal));
      return;
    }
    return fetch("/products")
      .then((response) => response.json())
      .then((products) => {
        console.log(products);
        setToCache(CONSTANTS.PRODUCTS_CACHE, products);
        dispatch(loadCoursesSuccess(products));
      })
      .catch((e) => {
        throw e;
      });
  };
}

/* Set up a localStorage for API cache so that API from nodejs server is called only once  */
export function getFromCache(key) {
  return JSON.parse(window.localStorage.getItem(key));
}

function setToCache(key, value) {
  return window.localStorage.setItem(key, JSON.stringify(value));
}
