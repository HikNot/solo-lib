import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PostCard from '../ui/PostCard';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import CommentsCard from '../ui/CommentsCard';

export default function PostPage() {
  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  const addComment = async (formdata) => {
    const res = await axiosInstance.post(`/comments/${id}`, [
      formdata,
      posts.id,
    ]);
    console.log(res.data);
  };
  useEffect(() => {
    axiosInstance
      .get(`/posts/one-post/${id}`)
      .then((res) => setPosts(res.data));
  }, []);
  useEffect(() => {
    axiosInstance.get(`/comments/${id}`).then((res) => setComments(res.data));
  }, []);

  if (!posts) return <h2>Loading....</h2>;

  return (
    <Container>
      <Row xs={4} md={6} lg={8} className="mt-1">
        <Col key={posts.id}>
          <PostCard post={posts} />
        </Col>
      </Row>
      <Row xs={1} md={2} className="mt-3">
        <Col>
          <h3>Оставить комментарий</h3>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = Object.fromEntries(new FormData(e.target));
              addComment(formData);
            }}
          >
            <FloatingLabel
              controlId="floatingInput"
              label="Ваш комментарий здесь"
              className="mb-3"
            >
              <Form.Control
                name="body"
                type="text"
                placeholder="Ваш комментарий здесь"
              />
            </FloatingLabel>
            <Button type="submit" className="mb-3" variant="outline-info">
              Добавить
            </Button>{' '}
          </Form>
        </Col>
      </Row>
      <Row style={{width: "60%"}}>
        {comments.map((comment) => (
          <Col key={comment.id}>
            <CommentsCard comment={comment} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
