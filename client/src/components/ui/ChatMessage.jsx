import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

export default function ChatMessage({ user, messages }) {
  // console.log(messages[0].User.name);
  console.log(messages);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: user.id === messages.userId ? 'flex-end' : 'flex-start',
      }}
    >
      {/* {messages.body}&nbsp;&nbsp;<i>-{messages.User?.name}</i> */}
      {messages.map((message) => (
        <Row key={message.id}>
          <Col>
            {message.body}&nbsp;&nbsp;<i>-{message.User?.name}</i>
          </Col>
        </Row>
      ))}
    </div>
  );
}
