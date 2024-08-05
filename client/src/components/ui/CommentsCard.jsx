import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CommentsCard(comment) {
    console.log(comment.comment.User.name);
  return (
    <Card>
      <Card.Body><h4>{comment.comment?.body}</h4></Card.Body>
      <Card.Body><h5>{comment.comment?.User.name}</h5></Card.Body>
    </Card>
  );
}
