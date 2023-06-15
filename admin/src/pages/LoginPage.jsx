import { FormLabel } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginMiddleware } from "../../actions/actionCreator";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  let [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    await dispatch(loginMiddleware(userData));
    await navigate("/");
  };

  return (
    <div>
      <div className="px-4 d-flex flex-row justify-content-center">
        <div className="col col-8 d-flex justify-content-center">
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-7 mt-5">
                <div className="row">
                  <div className="col-md-12">
                    <img
                      className=" img-fluid center-block"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/2560px-McDonald%27s_logo.svg.png"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5 mt-5 d-flex flex-column bg-light shadow rounded-4">
                <h1 className="text-center mt-5">Login</h1>
                <form>
                  <div className="form-group">
                    <div>
                      <FormLabel className="mb-1">
                        <h4>Username</h4>
                      </FormLabel>
                      <input
                        name="username"
                        type="text"
                        placeholder="Username"
                        className="form-control"
                        onChange={loginHandler}
                      ></input>
                    </div>

                    <div>
                      <FormLabel className="mt-3 mb-1">
                        <h4 className="">Password</h4>
                      </FormLabel>
                      <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        onChange={loginHandler}
                      ></input>
                    </div>

                    <div className="d-grid gap-2 mt-4">
                      <button
                        className="btn btn-danger btn-lg"
                        type="submit"
                        onClick={submitHandler}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
