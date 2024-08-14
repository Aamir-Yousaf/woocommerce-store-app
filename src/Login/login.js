import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
import { setUserLogin } from "../slice/userSlice";
import { useNavigate } from "react-router-dom";

export default function Index() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email && password) {
      dispatch(setUserLogin({ email }));
      navigate("/");
    } else {
      alert("Wrong email or password");
    }
  };

  return (
    <Container>
      <Row>
        <Col sm={12} md={6} className="mx-auto  ">
          <h1 className="text-center mx-3">Login</h1>
          <Form onSubmit={handleChange}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                id="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </FormGroup>
            <Button type="submit" color="primary" block>
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
