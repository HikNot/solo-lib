import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { FcLike } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';

export default function PostCard({
  post,
  deletePostHandler,
  setModalContent,
  user,
  handleClick,
  moreInfoHandler,
}) {

  console.log(post);
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...';
    }
    return text;
  };

  const navigate = useNavigate();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src="https://w7.pngwing.com/pngs/124/1016/png-transparent-new-post-thumbnail.png"
      />
      <Card.Body>
        <Card.Title>{post?.title}</Card.Title>
        <Card.Text>{truncateText(post?.body, 30)}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Автор: {post.User?.name}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button onClick={() => deletePostHandler(post.id)} variant="danger">
          Удалить
        </Button>{' '}
        <Button onClick={() => setModalContent(post)} variant="warning">
          Редактировать
        </Button>{' '}
        <Button
          onClick={() => navigate(`/${post.id}`)}
          variant="info"
          className="mt-1"
        >
          Подробнее
        </Button>
        <span
          onClick={() => handleClick(post.id)}
          data-testid={`likes-${post.likes}`}
          style={{
            cursor: 'pointer',
          }}
        >
          <FcLike />
          <span data-testid={post.id} className="ms-1">
            {post.Likes?.length}
          </span>
        </span>
      </Card.Body>
    </Card>
  );
}
