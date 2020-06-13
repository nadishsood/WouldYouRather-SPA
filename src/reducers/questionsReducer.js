import _ from "lodash";
import { FETCH_QUESTIONS, SET_ACTIVE_LIST } from "./../actions/types";

export default (state = { activeList: "Unanswered Questions" }, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case SET_ACTIVE_LIST:
      return { ...state, activeList: action.payload };
    default:
      return state;
  }
};
