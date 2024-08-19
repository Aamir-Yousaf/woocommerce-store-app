import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "./banner.css"; // Optional: For custom styling

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <Container fluid className="p-0">
        <Row className="align-items-center text-center text-md-start">
          <Col md="6" className="p-5 ">
            <h1 className="display-4 animate__animated animate__fadeInUp">
              Welcome to Our Store
            </h1>
            <p className="lead animate__animated animate__fadeInUp">
              Discover the best products at unbeatable prices. Shop now and
              experience the difference.
            </p>
            <Button
              color="primary"
              size="lg"
              className="mt-3 animate__animated animate__fadeInUp"
            >
              Shop Now
            </Button>
          </Col>
          <Col md="6" className="p-0">
            <img
              src="/Imgs/headphone7.jpg"
              alt="Hero Banner"
              className="img-fluid w-100 animate__animated animate__fadeInRight"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
