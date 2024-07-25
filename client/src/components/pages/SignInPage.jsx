import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

export default function SignInPage({handleSignIn}) {
  return (
    <Container style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100svh',
    }}>
      <Form onSubmit={handleSignIn}>
        <Form.Group className="block mar-b-1" controlId="formBasicEmail">
          <Form.Label><h1>E-mail</h1></Form.Label>
          <Form.Control
            name="email"
            className="mb-3"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="block mar-b-1" controlId="formBasicPassword">
          <Form.Label><h1>Пароль</h1></Form.Label>
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
