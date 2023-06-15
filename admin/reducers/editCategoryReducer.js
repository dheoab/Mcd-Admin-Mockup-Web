import { EDIT_CATEGORY } from "../actions/actionType";

const initialState = {
  category: {},
};

const editCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};

export default editCategoryReducer;
