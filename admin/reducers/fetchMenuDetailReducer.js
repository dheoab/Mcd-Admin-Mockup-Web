import { FETCH_MENU_DETAIL } from "../actions/actionType";

const initialState = {
  selectedMenu: {},
  selectedIngredient: [],
};

const getSelectedMenuReducer = (state = initialState, action) => {
  if (action.type === FETCH_MENU_DETAIL) {
    return {
      ...state,
      selectedMenu: action.payload.menu,
      selectedIngredient: action.payload.ingredients,
    };
  } else {
    return state;
  }
};

export default getSelectedMenuReducer;
