import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChatMessage from './ChatMessage';
import Form from 'react-bootstrap/Form';
import { IoSend } from 'react-icons/io5';
import ChatInput from './ChatInput';

export default function ChatComponent({ user, messages, sendNewMessage }) {
  return (
    <>
      <Row>
        <Col xs={12}>
          {messages.map((message) => (
            <ChatMessage user={user} message={message} key={message.id} />
          ))}
        </Col>
        <Col>
          <ChatInput sendNewMessage={sendNewMessage} />
        </Col>
      </Row>
    </>
  );
}

{
  /*Map all messages.map(message -> ) */
}
