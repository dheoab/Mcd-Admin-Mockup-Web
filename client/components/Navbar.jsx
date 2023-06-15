import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginButton from "./Button";
import { NavLink } from "react-router-dom";

function NavbarMcd() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ backgroundColor: "#F6BB42" }}
      className="px-3 shadow sticky-top"
    >
      <NavLink to="/">
        <Navbar.Brand href="">McDu</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="">Menu</Nav.Link>
          <Nav.Link href="">Promo</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="">
            <LoginButton />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavbarMcd;
