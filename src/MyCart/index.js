import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Table } from "reactstrap"; // Button import removed as it's not used
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faTrash } from "@fortawesome/free-solid-svg-icons"; // Import the trash icon
import { emptyCart,removeFromCart } from "../slice/Cart";
import "./mycart.css";
import { useNavigate } from "react-router-dom";
export function Cart() {
  const navigate = useNavigate();
  const{ Cart, user} = useSelector((state) => state);
  const dispatch = useDispatch(); // Use camelCase for variable naming
  const handleEmptyCart = () => {
    dispatch(emptyCart());
  };
  
  const handleCheckOut = () =>{
        navigate("/checkout");
  }
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
              </tr>
            </thead>
            <tbody>
              {Cart.map((item, i) => (
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>
                    {user.currency} {item.price[user.currency].toFixed(2)}
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
              ))}
              <tr>
                <td colSpan="4" className="text-center">
                  Total: {user.currency}
                  {Cart.reduce((acc, item) => acc + item.price[user.currency].toFixed(2), 0)}
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
