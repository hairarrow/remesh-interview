import { REVERSE_ARRAY } from "../actions/reverseArray";

export default (state = {}, action) => {
  switch (action.type) {
    case REVERSE_ARRAY:
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
