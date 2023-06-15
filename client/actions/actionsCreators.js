import { FETCH_MENU, FETCH_MENU_DETAIL, FETCH_MENU_FAIL } from "./actionsType";

// const baseURL = "http://localhost:4040";
const baseURL = "https://server-mcd.dheoab.dev";
export const menusFetchAction = (menusFromDataBase) => ({
  type: FETCH_MENU,
  payload: menusFromDataBase,
});

export const menusFetchErrorAction = (errorMessageFromDataBase) => ({
  type: FETCH_MENU_FAIL,
  payload: errorMessageFromDataBase,
});

//middleware
export const fetchDataMenusMiddleware = () => async (dispatch, getState) => {
  try {
    const response = await fetch(`${baseURL}/public/items`);
    const responseJSON = await response.json();

    dispatch(menusFetchAction(responseJSON.data));
  } catch (error) {
    dispatch(menusFetchErrorAction({ message: "Failed" }));
  }
};

export const fetchMenuDetailAction = (selectedMenuFromDatabase) => ({
  type: FETCH_MENU_DETAIL,
  payload: selectedMenuFromDatabase,
});

export const fetchMenuDetailMiddleware =
  (menuId) => async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseURL}/public/items/${menuId}`);
      const responseJSON = await response.json();

      dispatch(fetchMenuDetailAction(responseJSON.data));
    } catch (error) {}
  };
