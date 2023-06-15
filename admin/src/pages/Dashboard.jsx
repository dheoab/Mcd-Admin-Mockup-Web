import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMenuMiddleware,
  fetchDataMenus,
} from "../../actions/actionCreator";

function DashboardPage() {
  let [itemId, setItemId] = useState(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { menus } = useSelector((state) => state.menus);
  const { deletedMenu } = useSelector((state) => state.deleteMenu);

  useEffect(() => {
    dispatch(fetchDataMenus());
  }, [deletedMenu]);

  useEffect(() => {
    dispatch(fetchDataMenus());
  }, []);

  const handleEditButton = (itemId) => {
    // setItemId(itemId);

    navigate(`/menu/${itemId}`);
  };

  const handleDeleteClick = (itemId) => {
    setItemId(itemId);

    dispatch(deleteMenuMiddleware(itemId));
  };

  return (
    <div className="mt-5">
      <div className="col-md-12 search-table-col mt-5 px-5">
        <NavLink to="/addmenu">
          <button type="button" className="btn btn-danger btn-lg mb-3">
            Add Menu
          </button>
        </NavLink>
        <div
          className="table-responsive table table-hover table-bordered results"
          style={{ width: "100%" }}
        >
          <table className="table table-striped table-bordered table-hover align-middle">
            <thead className="bill-header cs">
              <tr>
                <th id="trs-hd-1" style={{ width: "1%" }}>
                  No.
                </th>
                <th id="trs-hd-2" style={{ width: "10%" }}>
                  Menu
                </th>
                <th id="trs-hd-3" style={{ width: "5%" }}>
                  Image
                </th>
                <th id="trs-hd-4" style={{ width: "15%" }}>
                  Description
                </th>
                <th id="trs-hd-5" style={{ width: "5%" }}>
                  Price
                </th>
                <th
                  id="trs-hd-6"
                  style={{ width: "10%" }}
                  className="text-center"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu, index) => (
                <tr key={menu.id}>
                  <td className="text-center">{index + 1}</td>
                  <td>{menu.name}</td>
                  <td>
                    <img src={menu.imgUrl} width={150} />
                  </td>
                  <td>{menu.description}</td>
                  <td>{menu.price}</td>
                  <td>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn btn-primary me-3"
                        type="button"
                        onClick={() => handleEditButton(menu.id)}
                      >
                        edit
                      </button>
                      <button
                        className="btn btn-danger"
                        type="button"
                        onClick={() => handleDeleteClick(menu.id)}
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

export default DashboardPage;
