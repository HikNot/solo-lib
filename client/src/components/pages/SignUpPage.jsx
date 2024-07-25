import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function SignupPage({ handleSignUp }) {
  return (
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100svh',
      }}
    >
      <Form onSubmit={handleSignUp}>
        <Form.Group>
          <Form.Label><h3>Username</h3></Form.Label>
          <Form.Control
            name="name"
            className="mb-3"
            type="text"
            placeholder="Enter username"
          />
        </Form.Group>

        <Form.Group className="block mar-b-1" controlId="formBasicEmail">
          <Form.Label><h3>Email address</h3></Form.Label>
          <Form.Control
            name="email"
            className="mb-3"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="block mar-b-1" controlId="formBasicPassword">
          <Form.Label><h3>Password</h3></Form.Label>
          <Form.Control
            name="password"
            className="mb-3"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="block mar-b-1" controlId="formConfirmPassword">
          <Form.Label><h3>Confirm password</h3></Form.Label>
          <Form.Control
            className="mb-3"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
