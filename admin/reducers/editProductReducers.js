import { EDIT_MENU } from "../actions/actionType";

const initialState = {
  editedMenu: {},
};

const editMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_MENU:
      return {
        ...state,
        editMenu: action.payload,
      };
    default:
      return state;
  }
};

export default editMenuReducer;
