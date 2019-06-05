import { AXIOS } from "./services";

// constansts
export const GET_FONTS_PENDING = "FONTS::GET_FONTS_PENDING";
export const GET_FONTS_FULFILLED = "FONTS::GET_FONTS_FULFILLED";
export const GET_FONTS_REJECTED = "FONTS::GET_FONTS_FULFILLED";

// action creators
export const getFontsFulfilled = data => ({
  type: GET_FONTS_FULFILLED,
  payload: data
});

export const getFontsRejected = error => ({
  type: GET_FONTS_REJECTED,
  payload: error
});

export const getFontsPending = () => ({
  type: GET_FONTS_PENDING
});

// action
export const getFontsAction = request => dispatch => {
  dispatch(getFontsPending());

  AXIOS.get(`css?family=Roboto`).then(
    response => {
      dispatch(getFontsFulfilled(response.data));
    },
    error => {
      dispatch(getFontsRejected(error));
    }
  );
};

export default getFontsAction;
