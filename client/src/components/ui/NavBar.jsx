import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

export default function NavBar({ user, handleLogout }) {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <NavLink style={{ textDecoration: 'none' }} to={'/'}>
          <Navbar.Brand>Solo library</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user ? (
            <div>
              <Navbar.Text className="me-3">
                <NavLink to="/home">Home</NavLink>
              </Navbar.Text>
              <Navbar.Text className="me-3">
                <NavLink to="/my-cards">My cards</NavLink>
              </Navbar.Text>
              <Navbar.Text className="me-3">
                <NavLink to="/" onClick={handleLogout}>
                  Logout
                </NavLink>
              </Navbar.Text>
            </div>
          ) : (
            <div>
              <Navbar.Text className="me-3">
                <NavLink to="/signup">SignUp</NavLink>
              </Navbar.Text>
              <Navbar.Text className="me-3">
                <NavLink to="/signin">SignIn</NavLink>
              </Navbar.Text>
            </div>
          )}
          <Navbar.Text>
            {user ? `Signed in as: ${user.name}!` : 'Signed in as: Guest'}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
