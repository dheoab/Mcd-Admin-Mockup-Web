import { FETCH_MENU_DETAIL } from "../actions/actionsType";

const initialState = {
  menu: {},
};

const fetchDetailMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MENU_DETAIL:
      return {
        ...state,
        menu: action.payload,
      };

    default:
      return state;
  }
};

export default fetchDetailMenuReducer;
