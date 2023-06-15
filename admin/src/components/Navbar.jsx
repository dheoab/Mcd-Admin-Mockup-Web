import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginButton from "./Button";
import { NavLink, useNavigate } from "react-router-dom";

function NavbarMcd() {
  const navigate = useNavigate();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#F6BB42" }}
      className="px-3 shadow sticky-top"
    >
      <NavLink to="/" className="text-decoration-none text-dark">
        <Navbar.Brand href="">McDu</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/categories" className="text-decoration-none text-dark">
            Categories
          </NavLink>
        </Nav>

        <Nav>
          <Nav className="me-auto me-3">
            <NavLink to="/register">
              <button className="btn btn-danger me-2">Register</button>
            </NavLink>
          </Nav>
          <Nav className="me-auto me-3">
            <NavLink to="/login">
              <button
                className="btn btn-danger me-2"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                Logout
              </button>
            </NavLink>
          </Nav>
          <NavLink to="/login">
            <LoginButton className="me-auto" />
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavbarMcd;
