import { DELETE_MENU } from "../actions/actionType";

const initialState = {
  deletedMenu: {},
};

const deleteMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_MENU:
      return {
        ...state,
        deletedMenu: action.payload,
      };
    default:
      return state;
  }
};

export default deleteMenuReducer;
