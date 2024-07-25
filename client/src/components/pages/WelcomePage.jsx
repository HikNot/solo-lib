import React from 'react';
import { NavLink } from 'react-router-dom';

export default function WelcomePage() {
  return (
    <>
      <div
        style={{
            color: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '250px',
        }}
      >
        <h1>Здравствуй пользователь!</h1>
        <br/>
        <br/>
        <NavLink
          to={'/signup'}
          style={{
            textDecoration: 'none',
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          <h3>Зарегистрироваться</h3>
        </NavLink>
        <NavLink
          to={'/signin'}
          style={{
            textDecoration: 'none',
            color: 'black',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          <h3>Войти</h3>
        </NavLink>
      </div>
    </>
  );
}
