import { COUNTER_DECREMENT_FIRSTNUMBER } from "../actions/actionType";

const initialState = {
  fristNumber: 0,
  secondNumber: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "counter/incrementFristCounter") {
    return {
      ...state,
      fristNumber: state.fristNumber + 1,
    };
  } else if (action.type === COUNTER_DECREMENT_FIRSTNUMBER) {
    return {
      ...state,
      fristNumber: state.fristNumber - 1,
    };
  }
};

export default counterReducer;
