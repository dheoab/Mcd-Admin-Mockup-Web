import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataCategories } from "../../actions/actionCreator";
import { useParams } from "react-router-dom";

function AddEditForm(props) {
  const { categories } = useSelector((state) => state.categories);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDataCategories());
  }, []);

  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-7 col-xxl-8 site-form">
      <form onSubmit={props.submitHandler} className="">
        <div className="form-group mb-3">
          <label className="form-label " htmlFor="name">
            <h4>Menu Name</h4>
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Menu Name"
            onChange={props.dataHandler}
            value={props?.editMenu?.name}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="categoryId">
            <h4>Category</h4>
          </label>
          <div className="input-group mb-3">
            <select
              className="form-select w-100 form-control"
              name="categoryId"
              onChange={props.dataHandler}
              value={props?.editMenu?.categoryId}
            >
              <option selected disabled>
                Choose...
              </option>

              {categories?.map((category) => {
                return (
                  <option value={category?.id} key={category.id}>
                    {category.name}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="description">
            <h4>Description</h4>
          </label>
          <textarea
            className="form-control"
            name="description"
            required
            placeholder="Menu Description"
            rows="8"
            onChange={props.dataHandler}
            value={props?.editMenu?.description}
          ></textarea>
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="price">
            <h4>Price</h4>
          </label>
          <input
            className="form-control"
            type="number"
            name="price"
            placeholder="Menu Price"
            onChange={props.dataHandler}
            value={props?.editMenu?.price}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">
            <h4>Image URL</h4>
          </label>
          <input
            className="form-control"
            type="text"
            name="imgUrl"
            required
            placeholder="Menu Image"
            onChange={props.dataHandler}
            value={props?.editMenu?.imgUrl}
          />
        </div>

        {props.ingredientInput?.map((ingredient, index) => (
          <div
            className="form-group mb-3 d-flex flex-col justify-content-between"
            key={index}
          >
            <div className="col-5">
              <label htmlFor="name" className="form-label">
                Ingredient
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={(event) => props.addIngredientsHandler(event, index)}
                value={ingredient?.name}
              />
            </div>
          </div>
        ))}

        <button className="btn btn-danger" onClick={props.addIngredientsField}>
          Add Ingredient
        </button>

        <div className="d-grid gap-2 mt-4">
          <button
            className="btn btn-danger btn-lg"
            type="submit"
            // onClick={props.submitHandler}
          >
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEditForm;
