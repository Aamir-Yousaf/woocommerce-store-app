import React from "react";
import { useSelector } from "react-redux";
import { Button, Container, Table } from "reactstrap"; // Button import removed as it's not used
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faTrash } from "@fortawesome/free-solid-svg-icons"; // Import the trash icon
export function Cart() {
  const{ Cart} = useSelector((state) => state); // Use camelCase for variable naming

  return (
    <Container fluid className="mt-5">
      <h2 className="my-3 text-center">Cart Details</h2>
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
                  <Button color="danger">
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="4" className="text-center">
                Total: PKR {Cart.reduce((acc, item) => acc + item.price, 0)}
              </td>
              <td colSpan="2">
                <Button color="primary">Checkout</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </Container>
  );
}
