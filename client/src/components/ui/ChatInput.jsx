import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { IoSend } from 'react-icons/io5';

export default function ChatInput({ sendNewMessage }) {
  return (
    <Form onSubmit={(e) => {
        e.preventDefault();
        const form = e.target
        const text = new FormData(form).get("text")
        sendNewMessage(text)
        form.reset()
    }}>
      <Row>
        <Col className="mt-3" xs={9}>
          <Form.Control name="text" type="text" placeholder="Enter your message" />
        </Col>
        <Col xs={3} style={{ marginTop: '1.25rem' }}>
          <IoSend
            style={{ cursor: 'pointer' }}
            onClick={() => console.log('clicked')}
          />
        </Col>
      </Row>
    </Form>
  );
}
