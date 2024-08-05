import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ChatList from '../ui/ChatList';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChatComponent from '../ui/ChatComponent';

export default function ChatPage({user}) {
  const [online, setOnline] = useState([]);
  const [messages, setMessages] = useState([]);
  const soketRef = useRef(null);

  useEffect(() => {
    const soket = new WebSocket('http://localhost:3000');
    soketRef.current = soket;
    soket.onopen = () => console.log('CONNECTED');
    soket.onclose = () => console.log('DISCONNECTED');
    soket.onerror = () => console.log('ERROR');
    soket.onmessage = (event) => {
      const action = JSON.parse(event.data);
      const { type, payload } = action;
      switch (type) {
        case 'SET_USERS':
          setOnline(payload);
          break;
        case 'NEW_MESSAGES':
          setMessages(payload);
          break;
        case 'ADD_MESSAGE':
          setMessages((prev) => [...prev, payload]);
          break;
        default:
          break;
      }
    };
    return () => {
      soketRef.current.close();
    };
  }, []);

  const sendNewMessage = (text) => {
    const action = {
      type: 'NEW_MESSAGE',
      payload: {
        text,
      },
    };
    soketRef.current.send(JSON.stringify(action));
  };

  return (
    <Container>
      <Row>
        <Col className="mt-3" xs={2}>
          <ChatList online={online} />
        </Col>
        <Col className="mt-3" xs={10}>
          <ChatComponent user={user} sendNewMessage={sendNewMessage} messages={messages} />
        </Col>
      </Row>
    </Container>
  );
}
