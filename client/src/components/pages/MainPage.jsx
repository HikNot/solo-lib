import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import PostCard from '../ui/PostCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MainPage({user}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosInstance.get('/posts').then((res) => setPosts(res.data));
  }, []);

  return (
    <>
      <Container>
        <Row className='mt-1'>
          {posts.map((post) => (
            <Col className='mt-3 mb-3' key={post.id}>
              <PostCard user={user} post={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
