import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CommentsCard(comment) {
    console.log(comment.comment.User.name);
  return (
    <Card>
      <Card.Body><h2>{comment.comment?.body}</h2></Card.Body>
      <Card.Body><h3>{comment.comment?.User.name}</h3></Card.Body>
    </Card>
  );
}
