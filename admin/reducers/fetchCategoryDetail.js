import {
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAIL,
  FETCH_CATEGORY_DETAIL,
} from "../actions/actionType";

const initialState = {
  category: {},
};

const fetchCategoryDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORY_DETAIL:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default fetchCategoryDetailReducer;
