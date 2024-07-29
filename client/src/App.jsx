import React, { useEffect, useState } from 'react';
import Layout from './components/Layout';
import MainPage from './components/pages/MainPage';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  useNavigate,
} from 'react-router-dom';
import SignUpPage from './components/pages/SignUpPage';
import axiosInstance, { setAccessToken } from './axiosInstance';
import SignInPage from './components/pages/SignInPage';
import ProtectedRoute from './components/hoc/ProtectedRoute';
import WelcomePage from './components/pages/WelcomePage';
import AccountPage from './components/pages/AccountPage';
import PostPage from './components/pages/PostPage';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const time = setTimeout(() => axiosInstance
    .get('/tokens/refresh')
    .then((res) => {
      const { user, accessToken } = res.data;
      setUser(user);
      setAccessToken(accessToken);
    })
    .catch(() => {
      setUser(null);
      setAccessToken('');
    }), 1000)
    
    return () => clearTimeout(time)
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post('/auth/signup', data);
    if (res.status === 200) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await axiosInstance.post('/auth/signin', data);
    if (res.status === 200) {
      setUser(res.data.user);
      setAccessToken(res.data.accessToken);
    }
    window.location.href = '/home';
  };

  const handleLogout = async () => {
    const res = await axiosInstance.post('/auth/logout');
    if (res.status === 200) {
      setUser(null);
      setAccessToken('');
    }
  };

  const router = createBrowserRouter([
    {
      element: <Layout user={user} handleLogout={handleLogout} />,
      children: [
        {
          path: '/',
          element: <Navigate to="/home" replace />,
        },
        {
          path: '/home',
          element: (
            <ProtectedRoute isAllowed={!!user} redirectPath="/welcome">
              <MainPage user={user}></MainPage>
            </ProtectedRoute>
          ),
        },
        {
          path: '/my-cards',
          element: (
            <ProtectedRoute isAllowed={!!user} redirectPath="/welcome">
              <AccountPage user={user} />
            </ProtectedRoute>
          ),
        },
        {
          path: '/:id',
          element: (
            <ProtectedRoute isAllowed={!!user} redirectPath="/welcome">
              <PostPage />
            </ProtectedRoute>
          ),
        },
        {
          element: <ProtectedRoute isAllowed={!user} redirectPath="/" />,
          children: [
            {
              path: '/welcome',
              element: <WelcomePage />,
            },
            {
              path: '/signup',
              element: <SignUpPage handleSignUp={handleSignUp} />,
            },
            {
              path: '/signin',
              element: <SignInPage handleSignIn={handleSignIn} />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
