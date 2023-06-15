function AddEditCategoryForm(props) {
  // const selectedCategory = props.category.data;

  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-7 col-xxl-8 site-form">
      <form onSubmit={props.submitHandler} className="">
        <div className="form-group mb-3">
          <label className="form-label " htmlFor="name">
            <h4>Category Name</h4>
          </label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Category Name"
            onChange={props.dataHandler}
            value={props?.category?.name}
          />
        </div>

        <div className="d-grid gap-2 mt-4">
          <button className="btn btn-danger btn-lg" type="submit">
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEditCategoryForm;
