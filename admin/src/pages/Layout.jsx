import { Outlet } from "react-router-dom";
import NavbarMcd from "../components/Navbar";

function Layout() {
  return (
    <div>
      <NavbarMcd />
      <Outlet />
    </div>
  );
}
export default Layout;
