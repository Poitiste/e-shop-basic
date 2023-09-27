import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import App from './App';
import ErrorPage from './_commons/ErrorPage';
import Shop from './pages/Shop';
import Home from './pages/Home';
import Services from './_components/Services';
import ProductDetail from './pages/ProductDetails';
import Connection from './pages/Connection';
import LoginForm from './_commons/LoginForm';
import RegisterForm from './_commons/RegisterForm';
import ForgotPassword from './_commons/ForgotPassword';
import Checkout from './_components/Checkout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/shop/:category",
        element: <Shop category='' />,
      },
      {
        path: "/shop/promotions",
        element: <Shop category='promotions' />
      },
      {
        path: "/shop/news",
        element: <Shop category='news' />
      },
      {
        path: "/shop/detail/:id",
        element: <ProductDetail />
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/connection",
        element: <Connection/>
      },
      {
        path: "/login",
        element: <LoginForm/>
      },
      {
        path: "/register",
        element: <RegisterForm />
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />
      },
      {
        path: "checkout",
        element: <Checkout/>
      },
      {
        path: "*",
        errorElement: <ErrorPage />
      }
    ],
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Toaster />
      <RouterProvider router={router} />
  </React.StrictMode>
);