import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

export default function EditModal({
  setModalContent,
  modalContent,
  editHandler,
}) {
  const handleClose = () => {
    setModalContent(null);
  };
  return (
    <Modal show={!!modalContent} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Редактирование поста</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={editHandler}>
          <FloatingLabel
            controlId="floatingInput"
            label="Заголовок поста"
            className="mb-3"
          >
            <Form.Control
              name="title"
              type="text"
              placeholder="Введите заголовок поста"
              defaultValue={modalContent?.title}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Текст поста">
            <Form.Control
              name="body"
              type="text"
              placeholder="Введите текст поста"
              defaultValue={modalContent?.body}
            />
          </FloatingLabel>
      <Button className='mt-3' variant="primary" type='submit'>
        Save Changes
      </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}
