import { LOGIN, LOGIN_FAILED } from "../actions/actionType";

const initialState = {
  responseLogin: {},
  responseFail: {},
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        responseLogin: action.payload,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        responseFail: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
