import React from 'react';
import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export default function Layout({ user, handleLogout }) {
  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Outlet />
    </>
  );
}
