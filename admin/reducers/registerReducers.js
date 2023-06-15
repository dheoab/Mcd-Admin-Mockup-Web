import { REGISTER } from "../actions/actionType";

const initialState = {
  registerData: {},
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        registerData: action.payload,
      };

    default:
      return state;
  }
};

export default registerReducer;
