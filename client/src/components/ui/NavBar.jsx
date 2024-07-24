import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

export default function NavBar({ user, handleLogout }) {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Solo library</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user ? (
            <>
              <Navbar.Text>
                <NavLink to="/">Home</NavLink>
              </Navbar.Text>
              <Navbar.Text>
                <NavLink to="/my-cards">My cards</NavLink>
              </Navbar.Text>
              <Navbar.Text>
                <NavLink to="/" onClick={handleLogout}>Logout</NavLink>
              </Navbar.Text>
            </>
          ) : (
            <>
              <Navbar.Text>
                <NavLink to="/signup">SignUp</NavLink>
              </Navbar.Text>
              <Navbar.Text>
                <NavLink to="/signin">SignIn</NavLink>
              </Navbar.Text>
            </>
          )}
          <Navbar.Text>
            {user ? `Signed in as: ${user.name}!` : 'Signed in as: Guest'}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
