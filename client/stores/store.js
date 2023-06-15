import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import fetchMenuReducer from "../reducer/fetchMenusReducers";
import fetchDetailMenuReducer from "../reducer/fetchDetailMenuReducers";

const rootReducers = combineReducers({
  menus: fetchMenuReducer,
  selectedMenu: fetchDetailMenuReducer,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
