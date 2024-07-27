import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../../axiosInstance';
import Button from 'react-bootstrap/Button';
import PostCard from '../ui/PostCard';
import EditModal from '../ui/Modal';

export default function AccountPage({ user }) {
  const [post, setPost] = useState([]);
  const [addPost, setAddPost] = useState([]);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/posts/${user.id}`).then((res) => setPost(res.data));
  }, []);

  const addPostHandler = async (formData) => {
    const res = await axiosInstance.post(`/posts/${user.id}`, formData);
    if (res.status === 201) {
      alert('Пост успешно добавлен');
      setAddPost((prev) => [...prev, res.data]);
      window.location.reload();
    }
  };

  const deletePostHandler = async (id) => {
    const res = await axiosInstance.delete(`posts/${id}`);
    if (res.status === 200) {
      alert('Пост успешно удален');
      setAddPost((prev) => prev.filter((el) => el.id !== id));
      window.location.reload();
    }
  };

  const editHandler = async (e) => {
    e.preventDefault()
    const formData = Object.fromEntries(new FormData(e.target));
    const res = await axiosInstance.patch(`/posts/${modalContent.id}`, formData)
    setPost((prev) => prev.map((el) => el.id === modalContent.id ? res.data : el))
    setModalContent(null)
  }

  return (
    <Container>
      <Row xs={2} md={4} lg={6}>
        <Col>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="171x180"
              src="https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png"
            />
            <Figure.Caption>Пока в разработке</Figure.Caption>
          </Figure>
        </Col>
        <Col>
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
        </Col>
      </Row>
      <Row xs={1} md={2} className="mt-1">
        {post.map((el) => (
          <Col key={el.id} className="mt-3">
            <PostCard
              setModalContent={setModalContent}
              deletePostHandler={deletePostHandler}
              user={user}
              post={el}
            />
          </Col>
        ))}
      </Row>
      <Row xs="auto">
        <Col className="mt-3">
          <h2>Добавить новый пост</h2>{' '}
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              const formData = Object.fromEntries(new FormData(e.target));
              addPostHandler(formData);
            }}
          >
            <FloatingLabel
              controlId="floatingInput"
              label="Заголовок поста"
              className="mb-3"
            >
              <Form.Control
                name="title"
                type="text"
                placeholder="Введите заголовок поста"
              />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Текст поста">
              <Form.Control
                name="body"
                type="text"
                placeholder="Введите текст поста"
              />
            </FloatingLabel>
            <Button type="submit" className="mt-3 mb-3" variant="outline-info">
              Добавить
            </Button>{' '}
          </Form>
        </Col>
      </Row>
      <EditModal
        modalContent={modalContent}
        setModalContent={setModalContent}
        editHandler={editHandler}
      />
    </Container>
  );
}
