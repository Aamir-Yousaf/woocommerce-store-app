import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Button,
} from "reactstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="align-items-center text-center text-md-left">
          {/* Logo Section */}
          <Col md="3" className="mb-3 mb-md-0">
            <img
              src="https://demo.phlox.pro/shop-digital/wp-content/uploads/sites/127/2019/09/logotype.png"
              alt="Logo"
              width="104"
              height="18"
            />
            <p className="mt-2">
              There are many variations of Lorem Ipsum available, but the
              majority have.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md="3" className="mb-3 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Section */}
          <Col md="3" className="mb-3 mb-md-0">
            <h5>Contact</h5>
            <p>+99 (0) 101 0000 888</p>
            <p>Patricia C. Amedee</p>
            <p>4401 Waldeck Street Grapevine</p>
            <p>Nashville, Tx 76051</p>
          </Col>

          {/* Subscribe Section */}
          <Col md="3" className="mb-3 mb-md-0">
            <h5>Subscribe To Our Email</h5>
            <p>For Latest News & Updates</p>
            <Form>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </FormGroup>
              <Button color="primary">Subscribe</Button>
            </Form>
          </Col>
        </Row>

        {/* Social Media Icons */}
        <Row className="text-center mt-4">
          <Col>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-light mx-2">
              <i className="fab fa-twitter"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
