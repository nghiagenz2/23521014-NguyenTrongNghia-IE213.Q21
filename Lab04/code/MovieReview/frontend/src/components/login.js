import React, { useState } from "react";
import { Container, Form, Button, Card, Alert } from "react-bootstrap";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setLoading(true);
      setTimeout(() => {
        props.login({ email });
        setLoading(false);
      }, 500);
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <Container className="py-5 d-flex justify-content-center">
      <Card style={{ width: "100%", maxWidth: "400px" }} className="shadow">
        <Card.Body>
          <h2 className="mb-4 text-center">Login</h2>
          {error && (
            <Alert variant="danger" onClose={() => setError("")} dismissible>
              {error}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                disabled={loading}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                disabled={loading}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}