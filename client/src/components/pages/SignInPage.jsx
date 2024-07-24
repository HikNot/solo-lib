import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function SignInPage({handleSignIn}) {
  return (
    <Container>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="block mar-b-1" controlId="formBasicEmail">
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            name="email"
            className="mb-3"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="block mar-b-1" controlId="formBasicPassword">
          <Form.Label>Пароль</Form.Label>
          <Form.Control
            name="password"
            className="mb-3"
            type="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    </Container>
  );
}
