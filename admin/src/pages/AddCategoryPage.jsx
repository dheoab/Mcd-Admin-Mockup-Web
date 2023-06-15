import { useState } from "react";
import AddEditCategoryForm from "../components/AddEditFormCategory";
import { postCategoryMiddleware } from "../../actions/actionCreator";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function AddCategoryPage() {
  const [newCategory, setNewCategory] = useState({
    name: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addHandler = (event) => {
    event.preventDefault();
    setNewCategory({
      ...newCategory,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await dispatch(postCategoryMiddleware(newCategory));

    await navigate("/categories");
  };
  return (
    <>
      <div id="info-container" className="container ">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-12">
            <h2 className="text-center text-dark my-5">New Menu</h2>
          </div>
          <AddEditCategoryForm
            submitHandler={submitHandler}
            dataHandler={addHandler}
          />
        </div>
      </div>
    </>
  );
}

export default AddCategoryPage;
