import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "./slice/userSlice";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
export default function NavBar() {
  const {user,Cart} = useSelector((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    dispatch(LogoutUser());
    toast.success(
      <div>
        User successfully Logged out &nbsp;
        <FontAwesomeIcon className="text-danger" icon={faFaceAngry} />
      </div>
    );
  };
  return (
    <div>
      <Navbar color="primary" expand={"sm"}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link custom-link" to={"/"}>
                Home
              </Link>
            </NavItem>
            <NavItem className="position-relative">
              {" "}
              {/* Set position-relative for the container */}
              <Link className="nav-link custom-link" to="/cart">
                Cart
              </Link>
              <Badge
                color="info"
                pill
                className="position-absolute   badge-cart"
              >
                {Cart.length}
              </Badge>
            </NavItem>
          </Nav>
          <Nav className="ms-auto " navbar>
            <NavbarText className="admin">
              <span className="text-white">Welcome</span>{" "}
              <span className="text-warning admin-info">
                {user?.data?.email || "Guest"}
              </span>
            </NavbarText>

            <NavItem className="user-btn custom-link">
              {user.isLoggedIn ? (
                <NavLink
                  onClick={handleLogout}
                  className="logout-btn custom-link"
                >
                  Logout
                </NavLink>
              ) : (
                <Link className="nav-link custom-link" to="/login">
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
