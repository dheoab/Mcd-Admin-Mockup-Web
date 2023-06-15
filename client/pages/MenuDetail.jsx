import { useEffect } from "react";
import useFetchData from "../hooks/fetchData";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuDetailMiddleware } from "../actions/actionsCreators";

const baseURL = "http://localhost:3000";

function MenuDetailPage() {
  let { id } = useParams();

  const { menu } = useSelector((state) => state.selectedMenu);

  const dispatch = useDispatch();

  // const menu = useFetchData(`${baseURL}/items/${id}`);

  useEffect(() => {
    dispatch(fetchMenuDetailMiddleware(id));
  }, []);

  return (
    <div>
      <div
        className="px-4 d-flex flex-row justify-content-center"
        style={{ backgroundColor: "#F6BB42" }}
      >
        <div className="col col-8 d-flex justify-content-center m-5">
          <div>
            <div className="row mt-5">
              <div className="col-md-7 mt-5">
                <div className="row">
                  <div className="col-md-12">
                    <img
                      className="img-fluid center-block"
                      src={menu.imgUrl}
                      style={{ maxHeight: "300px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col mt-5 d-flex flex-column bg-light p-5 rounded-3">
                <h1>{menu.name}</h1>
                <p>{menu.description}</p>
                <h2 className="text-success mt-5 mb-4">Rp {menu.price}</h2>
                <button
                  className="btn btn-danger btn-lg center-block"
                  type="button"
                >
                  <i className="fa fa-cart-plus"></i> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDetailPage;
