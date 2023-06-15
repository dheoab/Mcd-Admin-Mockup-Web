import { FETCH_MENU, FETCH_MENU_FAILED } from "../actions/actionType";

const initialState = {
  menus: [],
  error: {},
};

const menusReducer = (state = initialState, action) => {
  if (action.type === FETCH_MENU) {
    return {
      ...state,
      menus: action.payload,
    };
  } else if (action.type === FETCH_MENU_FAILED) {
    return {
      ...state,
      error: action.payload,
    };
  } else {
    return state;
  }
};

export default menusReducer;
