import { FETCH_QUESTIONS, SET_ACTIVE_LIST, CREATE_QUESTION } from "./../actions/types";

export default (state = { activeList: "Unanswered Questions", questions:{} }, action) => {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return { ...state, questions: action.payload };
    case SET_ACTIVE_LIST:
      return { ...state, activeList: action.payload };
    case CREATE_QUESTION:
      let newState = {...state}
      newState.questions[action.payload.id] = action.payload;
      return newState;

    default:
      return state;
  }
};
