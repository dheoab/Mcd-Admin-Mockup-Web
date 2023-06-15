import { FETCH_CATEGORIES } from "../actions/actionType";

const initialState = {
  categories: [],
};

const categoriesReducer = (state = initialState, action) => {
  if (action.type === FETCH_CATEGORIES) {
    return {
      ...state,
      categories: action.payload,
    };
  } else {
    return state;
  }
};

export default categoriesReducer;
