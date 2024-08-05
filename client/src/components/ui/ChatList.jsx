import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function ChatList({ online }) {
  console.log(online);

  return (
    <ListGroup>
      {online.map((user) => (
        <ListGroup.Item key={user.id}>{user.name}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
