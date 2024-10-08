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
import "./footer.css";
import { delay, motion } from "framer-motion";
const Footer = () => {
  return (
    <footer className="footer-box text-white py-4 mt-2">
      <Container className="footer-main">
        <Row className="align-items-center text-center text-md-left">
          {/* Logo Section */}
          <Col md="4" className="mb-3 mb-md-0">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 3, duration: 2 }}
            >
              <motion.img
                src="/Imgs/logotype.svg"
                alt="Logo"
                width="104"
                height="18"
              />
              <motion.p className="mt-2">
                There are many variations of Lorem Ipsum available, but the
                majority have.
              </motion.p>
            </motion.div>
          </Col>

          {/* Quick Links Section */}

          {/* Contact Section */}
          <Col md="4" className="mb-3 mb-md-0">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 3, duration: 3 }}
            >
              <h5>Contact</h5>
              <p>+99 (0) 101 0000 888</p>
              <p>Patricia C. Amedee</p>
              <p>4401 Waldeck Street Grapevine</p>
              <p>Nashville, Tx 76051</p>
            </motion.div>
          </Col>

          {/* Subscribe Section */}
          <Col md="4" className="mb-3 mb-md-0">
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 3, duration: 2 }}
            >
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
                <Button color="light">Subscribe</Button>
              </Form>
            </motion.div>
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
