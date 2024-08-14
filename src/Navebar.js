import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "./slice/userSlice";
import { toast } from "react-toastify";
export default function NavBar() {
  const {user} = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    dispatch(LogoutUser());
    toast.success("User logged out successfully");
  };
  return (
    <div>
      <Navbar color="primary" expand={"sm"}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {/* <NavbarText>Welcome, {user.data.email}</NavbarText> */}
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link custom-link" to={"/"}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link custom-link" to={"/cart"}>
                Cart
              </Link>
            </NavItem>
          </Nav>
          <Nav className="ms-auto" navbar>
            <NavItem className="user-btn custom-link">
              {user.isLoggedIn ? (
                <NavLink
                  onClick={handleLogout}
                  className="logout-btn custom-link"
                >
                  Logout
                </NavLink>
              ) : (
                <Link className="nav-link custom-link" to={"/login"}>
                  Login
                </Link>
              )}
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
