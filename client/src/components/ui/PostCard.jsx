import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

export default function PostCard({ post, deletePostHandler }) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://w7.pngwing.com/pngs/124/1016/png-transparent-new-post-thumbnail.png"
      />
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Автор: </ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button onClick={() => deletePostHandler(post.id)} variant="danger">Удалить</Button>{' '}
      </Card.Body>
    </Card>
  );
}
