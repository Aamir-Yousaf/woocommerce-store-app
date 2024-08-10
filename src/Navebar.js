import { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="primary" expand={"sm"}>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={"/cart"}>
                Cart
              </Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to={"/login"}>
                Login
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
