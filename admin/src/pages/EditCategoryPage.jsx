import { useNavigate, useParams } from "react-router-dom";
import AddEditCategoryForm from "../components/AddEditFormCategory";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  editCategoryMiddleware,
  fetchCategoryDetailMiddleware,
} from "../../actions/actionCreator";

function EditCategoryPage() {
  const { categoryId } = useParams();

  const { category } = useSelector((state) => state.selectedCategory);
  const [editCategory, setEditCategory] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setEditCategory(category);
  }, [category]);

  useEffect(() => {
    dispatch(fetchCategoryDetailMiddleware(categoryId));
  }, []);

  const editHandler = (event) => {
    setEditCategory({
      ...editCategory,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    
    await dispatch(editCategoryMiddleware(editCategory, categoryId));

    await navigate("/categories");
  };

  return (
    <>
      <div id="info-container" className="container ">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-12">
            <h2 className="text-center text-dark my-5">Edit Category</h2>
          </div>
          <AddEditCategoryForm
            category={editCategory}
            submitHandler={submitHandler}
            dataHandler={editHandler}
          />
        </div>
      </div>
    </>
  );
}

export default EditCategoryPage;
