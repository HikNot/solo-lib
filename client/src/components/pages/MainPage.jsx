import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import PostCard from '../ui/PostCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MainPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosInstance.get('/posts').then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <Container>
        <Row className='mt-4'>
          {posts.map((post) => (
            <Col key={post.id}>
              <PostCard post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
