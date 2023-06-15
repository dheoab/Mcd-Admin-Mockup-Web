import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postMenuMiddleware } from "../../actions/actionCreator";
import AddEditForm from "../components/AddEditForm";

function AddMenuPage() {
  const { addedMenu } = useSelector((state) => state.addMenu);

  useEffect(() => {
    if (Object.keys(addedMenu).length > 0 && addedMenu.name === newMenu.name) {
      navigate("/");
    }
  }, [addedMenu]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [newMenu, setNewMenu] = useState({
    name: "",
    categoryId: 0,
    description: "",
    price: 0,
    imgUrl: "",
  });

  let [newIngredients, setNewIngredients] = useState([
    {
      name: "",
    },
  ]);

  const addIngredientsField = (e) => {
    e.preventDefault();
    if (newIngredients.length < 5) {
      let newIngredientField = { name: "" };
      setNewIngredients([...newIngredients, newIngredientField]);
    }
  };

  const addHandler = (event) => {
    event.preventDefault();
    setNewMenu({
      ...newMenu,
      [event.target.name]: event.target.value,
    });
  };

  const addIngredientsHandler = (event, index) => {
    let updatedIngredients = [...newIngredients];
    updatedIngredients[index][event.target.name] = event.target.value;
    setNewIngredients(updatedIngredients);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    

    let toSendMenuData = { ...newMenu };
    let toSendIngredientsData = [...newIngredients];

    toSendMenuData.ingredients = toSendIngredientsData;

    
    await dispatch(postMenuMiddleware(toSendMenuData));
    await navigate("/");
  };

  return (
    <>
      <div id="info-container" className="container ">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-12">
            <h2 className="text-center text-dark my-5">New Menu</h2>
          </div>
          <AddEditForm
            submitHandler={submitHandler}
            dataHandler={addHandler}
            addIngredientsHandler={addIngredientsHandler}
            ingredientInput={newIngredients}
            addIngredientsField={addIngredientsField}
          />
        </div>
      </div>
    </>
  );
}

export default AddMenuPage;
