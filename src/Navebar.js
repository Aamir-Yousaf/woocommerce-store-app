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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency, LogoutUser } from "./slice/userSlice";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
export default function NavBar() {
  const { user, Cart } = useSelector((state) => state);
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
  const handleChangeCurrency = (name) => {
    dispatch(changeCurrency(name));
    toast.success(`Currency changed to ${name}`);
  };
  return (
    <motion.div
    initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{dely:1, duration:4}}

    >
      <Navbar color="black" expand={"sm"}>
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
                
                pill
                className="position-absolute   badge-cart text-white"
              >
                {Cart.length}
              </Badge>
            </NavItem>
            <UncontrolledDropdown className="Currency-info" nav inNavbar>
              <DropdownToggle className="text-white" nav caret>
                Currency
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => handleChangeCurrency("PKR")}>
                  PKR
                </DropdownItem>
                <DropdownItem onClick={() => handleChangeCurrency("USD")}>
                  USD
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText className="text-white">{user.currency}</NavbarText>
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
    </motion.div>
  );
}
