export const REVERSE_ARRAY = "REVERSE_ARRAY";

export const reverseArray = () => dispatch => {
  dispatch({
    type: REVERSE_ARRAY,
    payload: "result"
  });
};
