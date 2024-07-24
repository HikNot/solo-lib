import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function SignupPage({handleSignUp}) {
  return (
    <Container>
      <Form onSubmit={handleSignUp}>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control name="name" className="mb-3" type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="block mar-b-1" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" className="mb-3" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="block mar-b-1" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" className="mb-3" type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="block mar-b-1" controlId="formConfirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control className="mb-3" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
