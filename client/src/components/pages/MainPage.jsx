import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import PostCard from '../ui/PostCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MainPage({ user }) {
  const [posts, setPosts] = useState([]);

  const handleClick = async (id) => {
    const res = await axiosInstance.post(`/likes/${id}`);
    setPosts((prev) => prev.map((el) => (el.id === id ? res.data : el)));
  };

  useEffect(() => {
    axiosInstance.get('/posts').then((res) => setPosts(res.data));
  }, []);

  const moreInfoHandler = async (id) => {
    console.log(id);
  }

  return (
    <>
      <Container>
        <Row className="mt-1">
          {posts.map((post) => (
            <Col className="mt-3 mb-3" key={post.id}>
              <PostCard handleClick={handleClick} user={user} post={post} moreInfoHandler={moreInfoHandler}/>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
