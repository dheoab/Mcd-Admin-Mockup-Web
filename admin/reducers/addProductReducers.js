import { ADD_MENU, ADD_MENU_FAIL } from "../actions/actionType";

const initialState = {
  addedMenu: {},
};

const addMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MENU:
      return {
        ...state,
        addedMenu: action.payload,
      };
    case ADD_MENU_FAIL:
    default:
      return state;
  }
};

export default addMenuReducer;
