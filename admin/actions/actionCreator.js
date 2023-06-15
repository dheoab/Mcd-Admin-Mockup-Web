import {
  ADD_CATTEGORY,
  ADD_CATTEGORY_FAIL,
  ADD_MENU,
  ADD_MENU_FAIL,
  DELETE_CATEGORY,
  DELETE_CATEGORY_FAIL,
  DELETE_MENU,
  DELETE_MENU_FAILED,
  EDIT_CATEGORY,
  EDIT_CATEGORY_FAIL,
  EDIT_MENU,
  EDIT_MENU_FAILED,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FAIL,
  FETCH_CATEGORY_DETAIL,
  FETCH_CATEGORY_DETAIL_FAILED,
  FETCH_MENU,
  FETCH_MENU_DETAIL,
  FETCH_MENU_FAILED,
  LOGIN,
  LOGIN_FAILED,
} from "./actionType";

// const baseURLServer = "http://localhost:4040";
const baseURLServer = "https://server-mcd.dheoab.dev";
//Action Creater Fetch Data Menus dari Backend
export const menusFetch = (menusFromDataBase) => ({
  type: FETCH_MENU,
  payload: menusFromDataBase,
});

export const menusFetchError = (errorMessageFromDataBase) => ({
  type: FETCH_MENU_FAILED,
  payload: errorMessageFromDataBase,
});

//middleware
export const fetchDataMenus = () => async (dispatch, getState) => {
  try {
    const response = await fetch(`${baseURLServer}/items`, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    });
    const responseJSON = await response.json();

    if (response.status != 200) {
      throw { error: responseJSON };
    }
    dispatch(menusFetch(responseJSON.data));
  } catch (error) {
    dispatch(menusFetchError(error.error));
  }
};

export const categoriesFetch = (categoriesFromDataBase) => ({
  type: FETCH_CATEGORIES,
  payload: categoriesFromDataBase,
});

export const categoryFetchFails = (categoriesFromDataBase) => ({
  type: FETCH_CATEGORIES_FAIL,
  payload: categoriesFromDataBase,
});

export const fetchDataCategories = () => async (dispatch, getState) => {
  try {
    const response = await fetch(`${baseURLServer}/categories`, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    });
    const responseJSON = await response.json();

    if (response.status != 200) {
      throw { error: responseJSON };
    }
    dispatch(categoriesFetch(responseJSON.data));
  } catch (error) {
    dispatch(categoryFetchFails(error.error));
  }
};

export const postMenu = (newMenuFromClient) => ({
  type: ADD_MENU,
  payload: newMenuFromClient,
});

export const postMenuFail = (error) => ({
  type: ADD_MENU_FAIL,
  payload: error,
});

export const postMenuMiddleware = (newMenu) => async (dispatch, getState) => {
  try {
    const response = await fetch(`${baseURLServer}/items`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(newMenu),
    });

    const responseJSON = await response.json();

    if (response.status != 201) {
      throw { error: responseJSON };
    }

    // dispatch(postMenu(responseJSON));

    return responseJSON;
  } catch (error) {
    dispatch(postMenuFail(error.error));
  }
};

export const fetchMenuDetailAction = (dataMenu) => ({
  type: FETCH_MENU_DETAIL,
  payload: {
    menu: dataMenu.data,
    ingredients: dataMenu.data.Ingredients,
  },
});

export const fetchMenuDetailMiddleware =
  (menuId) => async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseURLServer}/items/${menuId}`, {
        method: "GET",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
      });
      const responseJSON = await response.json();

      dispatch(fetchMenuDetailAction(responseJSON));
    } catch (error) {}
  };

export const putMenuAction = (editMenuFromClient) => ({
  type: EDIT_MENU,
  payload: editMenuFromClient,
});

export const putMenuActionFail = (error) => ({
  type: EDIT_MENU_FAILED,
  payload: error,
});

export const editMenuMiddleware =
  (editMenu, menuId) => async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseURLServer}/items/${menuId}`, {
        method: "PUT",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(editMenu),
      });

      const responseJSON = await response.json();

      dispatch(putMenuAction(responseJSON));

      return responseJSON;
    } catch (error) {
      dispatch(putMenuActionFail(error));
    }
  };

export const deleteMenuAction = (deleteMenuFromClient) => ({
  type: DELETE_MENU,
  payload: deleteMenuFromClient,
});

export const deletetMenuActionFail = (error) => ({
  type: DELETE_MENU_FAILED,
  payload: error,
});

export const deleteMenuMiddleware = (menuId) => async (dispatch, getState) => {
  try {
    const responseDataDetail = await fetch(`${baseURLServer}/items/${menuId}`, {
      method: "GET",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    });
    const responseDataDetailJSON = await responseDataDetail.json();

    const responseDelete = await fetch(`${baseURLServer}/items/${menuId}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    });

    const responseDeleteJSON = await responseDelete.json();

    if (responseDelete.status != 200) {
      throw { name: responseDeleteJSON };
    }
    dispatch(deleteMenuAction(responseDataDetailJSON));
  } catch (error) {
    dispatch(deletetMenuActionFail(error.error));
  }
};

export const loginAction = (responseLoginSuccess) => ({
  type: LOGIN,
  payload: responseLoginSuccess,
});

export const loginActionFail = (responseLoginFail) => ({
  type: LOGIN_FAILED,
  payload: responseLoginFail,
});

export const loginMiddleware = (loginData) => async (dispatch, getState) => {
  try {
    const response = await fetch(`${baseURLServer}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    const responseJSON = await response.json();

    if (response.status != 200) {
      throw { error: responseJSON };
    }

    localStorage.setItem("access_token", responseJSON.access_token);
    dispatch(loginAction(responseJSON));
  } catch (error) {
    dispatch(loginActionFail(error.error));
  }
};

export const postCategoryAction = (newCategory) => ({
  type: ADD_CATTEGORY,
  payload: newCategory,
});

export const postCategoryActionFail = (error) => ({
  type: ADD_CATTEGORY_FAIL,
  payload: error,
});

export const postCategoryMiddleware =
  (newCategory) => async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseURLServer}/categories`, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(newCategory),
      });

      const responseJSON = await response.json();
    } catch (error) {}
  };

export const deleteCategoryAction = (newCategory) => ({
  type: DELETE_CATEGORY,
  payload: newCategory,
});

export const deleteCategoryActionFail = (error) => ({
  type: DELETE_CATEGORY_FAIL,
  payload: error,
});

export const deleteCategoryMiddleware =
  (categoryId) => async (dispatch, getState) => {
    try {
      const response = await fetch(
        `${baseURLServer}/categories/${categoryId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            access_token: localStorage.getItem("access_token"),
          },
        }
      );

      const responseJSON = await response.json();
    } catch (error) {}
  };

export const fetchCategoryDetailAction = (selectedCategory) => ({
  type: FETCH_CATEGORY_DETAIL,
  payload: selectedCategory,
});

export const fetchCategoryDetailActionFail = (error) => ({
  type: FETCH_CATEGORY_DETAIL_FAILED,
  payload: error,
});

export const fetchCategoryDetailMiddleware =
  (categoryId) => async (dispatch, getState) => {
    try {
      const response = await fetch(
        `${baseURLServer}/categories/${categoryId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            access_token: localStorage.getItem("access_token"),
          },
        }
      );

      const responseJSON = await response.json();

      if (response.status != 200) {
        throw { error: responseJSON };
      }
      dispatch(fetchCategoryDetailAction(responseJSON.data));
    } catch (error) {
      fetchCategoryDetailActionFail(error.error);
    }
  };

export const editCategoryAction = (editCategory) => ({
  type: EDIT_CATEGORY,
  payload: editCategory,
});

export const editCategoryActionFail = (error) => ({
  type: EDIT_CATEGORY_FAIL,
  payload: error,
});

export const editCategoryMiddleware =
  (editCategory, categoryId) => async (dispatch, getState) => {
    try {
      const response = await fetch(
        `${baseURLServer}/categories/${categoryId}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            access_token: localStorage.getItem("access_token"),
          },
          body: JSON.stringify(editCategory),
        }
      );

      const responseJSON = await response.json();

      dispatch(editCategoryAction(responseJSON));
    } catch (error) {}
  };

export const registerAction = (responseLoginSuccess) => ({
  type: LOGIN,
  payload: responseLoginSuccess,
});

export const registerActionFail = (responseLoginFail) => ({
  type: LOGIN_FAILED,
  payload: responseLoginFail,
});

export const registerMiddleware = (userData) => async (dispatch, getState) => {
  try {
    const response = await fetch(`${baseURLServer}/register`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
      body: JSON.stringify(userData),
    });

    const responseJSON = await response.json();

    if (!response.ok) {
      throw { error: responseJSON };
    }

    dispatch(registerAction(responseJSON.data));
  } catch (error) {
    //
    dispatch(registerActionFail(error.error));
  }
};
