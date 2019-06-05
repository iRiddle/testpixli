import {
  GET_FONTS_PENDING,
  GET_FONTS_FULFILLED,
  GET_FONTS_REJECTED
} from "./actions";

import { combineReducers } from "redux";

const isFetchingFonts = (state = false, action) => {
  switch (action.type) {
    case GET_FONTS_REJECTED:
    case GET_FONTS_FULFILLED:
      return false;
    case GET_FONTS_PENDING:
      return true;
    default:
      return state;
  }
};

const isErrorFonts = (state = "", action) => {
  switch (action.type) {
    case GET_FONTS_REJECTED:
      return action.payload;
    default:
      return state;
  }
};

const fonts = (state = {}, action) => {
  switch (action.type) {
    case GET_FONTS_FULFILLED:
      return action.payload;
    default:
      return state;
  }
};

const weather = combineReducers({
  isFetchingFonts,
  isErrorFonts,
  fonts
});

export default weather;
