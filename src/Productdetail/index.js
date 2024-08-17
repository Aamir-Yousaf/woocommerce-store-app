import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { BestSelling, NewArrivalItems } from "../Data";
import { useParams } from "react-router-dom";
import "./product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../slice/Cart";
import user from "../slice/userSlice"
export default function Index() {
  const { ProductId, TabIndex } = useParams();
  const [selectedproducts, setSelectedproducts] = useState(null);
   const dispatch = useDispatch();
  useEffect(() => {
    const product = [...BestSelling, ...NewArrivalItems].find(
      (item) => item.id === ProductId
    );
    setSelectedproducts(product);
  }, [ProductId, TabIndex]);

  if (!selectedproducts) {
    return <p>Product not found</p>;
  }

  return (
    <Container fluid className="mt-5">
      <Row className="align-items-center">
        <Col md="6">
          <Container className="Products-img-main my-5">
            <Row className="align-items-center">
              <Col md="4" className="products-lists ">
                {/* Checking if images are available and displaying them */}
                {selectedproducts.image && selectedproducts.image.length > 0 ? (
                  <>
                    <img
                      className="product-img side-bar-imgs w-20 h-20"
                      alt="Sample"
                      src={selectedproducts.image[0]}
                    />
                    <img
                      className="product-img side-bar-imgs"
                      alt="Sample"
                      src={selectedproducts.image[1]}
                    />
                    <img
                      className="product-img side-bar-imgs"
                      alt="Sample"
                      src={selectedproducts.image[2]}
                    />
                  </>
                ) : (
                  <p>No image available</p>
                )}
              </Col>
              <Col md="8">
                <div className="d-flex justify-content-center align-items-center">
                  {selectedproducts.image &&
                  selectedproducts.image.length > 0 ? (
                    <img
                      className="product-img"
                      alt="Sample"
                      src={selectedproducts.image[0]}
                    />
                  ) : (
                    <p>No image available</p>
                  )}
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col md="6">
          <div className="my-5 main-products-content">
            <h3 className="product-name">
              {selectedproducts.name || "Product Name Not Available"}
            </h3>
            <h1> PKR.{selectedproducts.price[user.currency] || ""}</h1>
            <p> {selectedproducts.shortDescription || ""}</p>
            <Button color="primary" onClick={() => dispatch(addToCart(item))}></Button>
          </div>
        </Col>
        
      </Row>
    </Container>
  );
  
}
