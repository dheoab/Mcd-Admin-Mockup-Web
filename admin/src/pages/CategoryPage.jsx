import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  deleteCategoryMiddleware,
  fetchDataCategories,
} from "../../actions/actionCreator";

function CategoryPage() {
  const { categories } = useSelector((state) => state.categories);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataCategories());
  }, []);

  // useEffect(() => {
  //   dispatch(fetchDataCategories());
  // }, [categories]);

  const handleEditButton = (categoryId) => {
    // setItemId(itemId);

    navigate(`/category/${categoryId}`);
  };

  const handleDeleteClick = async (categoryId) => {
    // setItemId(itemId);

    await dispatch(deleteCategoryMiddleware(categoryId));
    await dispatch(fetchDataCategories());
  };

  return (
    <div className="mt-5">
      <div className="col-md-12 mt-5 px-5">
        <NavLink to="/addcategory">
          <button type="button" className="btn btn-danger btn-lg mb-3">
            Add Category
          </button>
        </NavLink>
        <div
          className="table-responsive table table-hover table-bordered results"
          style={{ width: "100%" }}
        >
          <table className="table table-striped table-bordered table-hover align-middle">
            <thead className="bill-header cs">
              <tr>
                <th style={{ width: "1%" }}>No.</th>
                <th style={{ width: "20%" }}>Category</th>
                <th
                  id="trs-hd-6"
                  style={{ width: "5%" }}
                  className="text-center"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={categories.id}>
                  <td className="text-center">{index + 1}</td>
                  <td>{category.name}</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-primary me-3"
                        type="button"
                        onClick={() => handleEditButton(category.id)}
                      >
                        edit
                      </button>
                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => handleDeleteClick(category.id)}
                      >
                        delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
