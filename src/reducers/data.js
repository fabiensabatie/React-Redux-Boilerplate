import { FETCH_DATA } from "../actions/actions";

export default function reducer(state = {}, action) {
  switch (action.type) {
    // SELECT_CREATIVES
    case FETCH_DATA:
      return {
        ...state,
        checkedCreatives: action.key,
      };
    default:
      return state;
  }
}
