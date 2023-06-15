import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import menusReducer from "../reducers/dashboardReducers";
import categoriesReducer from "../reducers/fetchCategoryReducer";
import getSelectedMenuReducer from "../reducers/fetchMenuDetailReducer";
import editMenuReducer from "../reducers/editProductReducers";
import addMenuReducer from "../reducers/addProductReducers";
import deleteMenuReducer from "../reducers/deleteMenuReducers";
import loginReducer from "../reducers/loginReducer";
import fetchCategoryDetailReducer from "../reducers/fetchCategoryDetail";
import editCategoryReducer from "../reducers/editCategoryReducer";
import registerReducer from "../reducers/registerReducers";

// bikin conbo reducer

const rootReducers = combineReducers({
  loginState: loginReducer,
  menus: menusReducer,
  categories: categoriesReducer,
  addMenu: addMenuReducer,
  selectedMenu: getSelectedMenuReducer,
  editMenu: editMenuReducer,
  deleteMenu: deleteMenuReducer,
  selectedCategory: fetchCategoryDetailReducer,
  editCategory: editCategoryReducer,
  registerState: registerReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
