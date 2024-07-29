import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Spinner from '../ui/Spinner';

export default function Loader({ children, isLoading }) {
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isLoading]);

  return isLoading ? (
    <Row className="vh-100 d-flex justify-content-center align-items-center">
      <Col xs={2}>
        <Spinner />
      </Col>
    </Row>
  ) : (
    children
  );
}
