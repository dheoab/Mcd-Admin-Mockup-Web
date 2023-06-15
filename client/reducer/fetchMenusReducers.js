import { FETCH_MENU } from "../actions/actionsType";

const initialState = {
  menus: [],
};

const fetchMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU:
      return {
        ...state,
        menus: action.payload,
      };

    default:
      return state;
  }
};

export default fetchMenuReducer;
