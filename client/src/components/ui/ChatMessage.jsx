import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

export default function ChatMessage({ user, message }) {
  // console.log(messages[0].User.name);
  console.log(message);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: user.id === message.userId ? 'flex-end' : 'flex-start',
      }}
    >
      {message.body}&nbsp;&nbsp;<i>-{message.User?.name}</i>
    </div>
  );
}
