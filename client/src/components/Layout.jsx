import React from 'react';
import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Loader from './hoc/Loader';

export default function Layout({ user, handleLogout }) {
  return (
    <>
      <Loader isLoading={user === undefined}>
        <NavBar user={user} handleLogout={handleLogout} />
        <Outlet />
      </Loader>
    </>
  );
}
