import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AddEditForm from "../components/AddEditForm";
import { useDispatch, useSelector } from "react-redux";
import {
  editMenuMiddleware,
  fetchMenuDetailMiddleware,
} from "../../actions/actionCreator";

function EditMenuPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { menuId } = useParams();

  const { selectedMenu, selectedIngredient } = useSelector(
    (state) => state.selectedMenu
  );

  let [editIngredients, setEditIngredients] = useState([
    {
      name: "",
    },
  ]);

  useEffect(() => {
    setEditMenu(selectedMenu);
  }, [selectedMenu]);

  useEffect(() => {
    setEditIngredients(selectedIngredient);
  }, [selectedIngredient]);

  const { editedMenu } = useSelector((state) => state.editMenu);

  const addIngredientsField = (e) => {
    e.preventDefault();
    if (editIngredients.length < 5) {
      let editIngredientField = { name: "" };
      setEditIngredients([...editIngredients, editIngredientField]);
    }
  };

  const editHandler = (event) => {
    setEditMenu({
      ...editMenu,
      [event.target.name]: event.target.value,
    });
    
  };

  const addIngredientsHandler = (event, index) => {
    let updatedIngredients = [...editIngredients];
    updatedIngredients[index][event.target.name] = event.target.value;
    setEditIngredients(updatedIngredients);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    let toSendMenuData = { ...editMenu };
    let toSendIngredientsData = [...editIngredients];

    toSendMenuData.ingredients = toSendIngredientsData;

    

    await dispatch(editMenuMiddleware(toSendMenuData, menuId));
    await navigate("/");
  };

  useEffect(() => {
    dispatch(fetchMenuDetailMiddleware(menuId));
  }, []);

  let [editMenu, setEditMenu] = useState({
    name: "",
    categoryId: 0,
    description: "",
    price: 0,
    imgUrl: "",
  });

  return (
    <>
      <div id="info-container" className="container ">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-12">
            <h2 className="text-center text-dark my-5">Edit Menu</h2>
          </div>
          <AddEditForm
            editMenu={editMenu}
            dataHandler={editHandler}
            submitHandler={submitHandler}
            ingredientInput={editIngredients}
            addIngredientsField={addIngredientsField}
            addIngredientsHandler={addIngredientsHandler}
          />
        </div>
      </div>
    </>
  );
}

export default EditMenuPage;
