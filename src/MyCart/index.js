import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { emptyCart, removeFromCart, increaseQuantity, decreaseQuantity } from "../slice/Cart";
import "./mycart.css";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const navigate = useNavigate();
  const { Cart, user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };

  const handleCheckOut = () => {
    navigate("/checkout");
  };

  const handleProductDelete = (index) => {
    dispatch(removeFromCart(index));
  };

  return (
    <Container fluid className="my-5">
      <h2 className="my-3 text-center">Cart Details</h2>

      {Cart.length === 0 ? (
        <p className="text-center text-danger">Your Cart is empty</p>
      ) : (
        <>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {Cart.map((item, i) => {
                const price = item.price && user.currency && item.price[user.currency];
                const total = price ? price * item.quantity : 0;

                return (
                  <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                      {user.currency} {price ? price.toFixed(2) : "N/A"}
                    </td>
                    <td>
                      <ButtonGroup className="product-quantity">
                        <Button
                          color="primary"
                          onClick={() => dispatch(decreaseQuantity(item._id))}
                        >
                          -
                        </Button>
                        <Button color="primary">{item.quantity}</Button>
                        <Button
                          color="primary"
                          onClick={() => dispatch(increaseQuantity(item._id))}
                        >
                          +
                        </Button>
                      </ButtonGroup>
                    </td>
                    <td>
                      {user.currency}
                      {total.toFixed(2)}
                    </td>
                    <td>
                      <Button
                        onClick={() => handleProductDelete(i)}
                        color="danger"
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan="4" className="text-center">
                  Sub Total: {user.currency}
                  {Cart.reduce((acc, item) => {
                    const price = item.price && user.currency && item.price[user.currency];
                    return acc + (price ? price * item.quantity : 0);
                  }, 0).toFixed(2)}
                </td>
                <td colSpan="2">
                  <Button onClick={handleCheckOut} color="primary">
                    Checkout
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
          <div className="All-empty-btn">
            <Button color="danger" onClick={handleEmptyCart}>
              Empty Cart
            </Button>
          </div>
        </>
      )}
    </Container>
  );
}
