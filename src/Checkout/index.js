import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Table,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { emptyCart, removeFromCart } from "../slice/Cart"; // Adjust the import path
import "./checkout.css";
import { useNavigate } from "react-router-dom";

export function CheckOut() {
  const navigate = useNavigate();
  const { Cart,user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleProductDelete = (index) => {
    dispatch(removeFromCart(index));
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // Implement the checkout logic here
    alert("Order placed successfully!");
    dispatch(emptyCart());
    navigate("/");
  };
  const handleLogin = ()=>{
    navigate("/login");
  }
  const handleBackToCart = ()=>{
    navigate("/cart");
  }
  return (
    <Container fluid className="my-5 checkout-main">
      {user.isLoggedIn ? (
        <>
          {" "}
          <h2 className="my-3 text-center">Checkout Page</h2>
          <Row>
            <Col md={8} className="order-summary ">
              <h4 className="mb-4">Order Summary</h4>
              {Cart.length === 0 ? (
                <p className="text-center text-danger">Your Cart is empty</p>
              ) : (
                <Table bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Cart.map((item, i) => (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>PKR {item.price}</td>
                        <td>
                          <Button
                            onClick={() => handleProductDelete(i)}
                            color="danger"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="3" className="text-center">
                        <strong>
                          Total: PKR{" "}
                          {Cart.reduce((acc, item) => acc + item.price, 0)}
                        </strong>
                      </td>
                      <td colSpan="2">
                        <Button color="primary" onClick={handleBackToCart}>
                          {" "}
                          Back To Cart
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              )}
            </Col>

            <Col md={4} className="billing-dtl">
              <h4 className="mb-4">Billing Details</h4>
              <Form onSubmit={handleCheckout}>
                <FormGroup>
                  <Label for="name">Full Name</Label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="address">Address</Label>
                  <Input
                    type="text"
                    id="address"
                    placeholder="Enter your address"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label for="card">Credit Card Number</Label>
                  <Input
                    type="text"
                    id="card"
                    placeholder="Enter your card number"
                    required
                  />
                </FormGroup>

                <Button type="submit" color="primary" block>
                  Place Order
                </Button>
              </Form>
            </Col>
          </Row>{" "}
        </>
      ) : (
        <div className="text-center Login-btn">
          <h2 className="my-3 text-center">Please Login Before Proceed To CheckOut</h2>
          <Button
            color="danger"
            className="d-flex align-item-center justify-content-center"
            onClick={handleLogin}
          >
            Please LogIn{" "}
          </Button>
        </div>
      )}
    </Container>
  );
}
