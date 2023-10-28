import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import App from './App';
import ErrorPage from './_commons/ErrorPage';
import Shop from './_components/Shop/Shop';
import Home from './_components/Home';
import Services from './_components/Services';
import ProductDetail from './_components/Shop/ProductDetails';
import Connection from './_components/Connection';
import LoginForm from './_commons/LoginForm';
import RegisterForm from './_commons/RegisterForm';
import ForgotPassword from './_commons/ForgotPassword';
import Dashboard from './_components/admin/Dashboard/Dashboard';
import ShopComponents from './_components/Shop/ShopComponents';
import ShopPeripherals from './_components/Shop/ShopPeripherals';
import ShopHome from './_components/Shop/ShopHome';
import EditCarousel from './_components/admin/EditCarousel/EditCarousel';
import ShoppingCart from './_components/Shop/ShoppingCart';
import Cancel from './_components/Shop/Cancel';
import Succes from './_components/Shop/Succes';
import AddProduct from './_components/admin/Product/AddProduct';

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
        element: <ShopHome/>
      },
      {
        path: "/shop/promotions",
        element: <Shop/>
      },
      {
        path: "/shop/news",
        element: <Shop/>
      },
      {
        path: "/shop/composants",
        element: <ShopComponents/>
      },
      {
        path: "/shop/peripheriques",
        element: <ShopPeripherals/>
      },
      {
        path: "/shop/:category",
        element: <Shop/>
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
        path: "shopping-cart",
        element: <ShoppingCart/>
      },
      {
        path: "cancel",
        element: <Cancel/>
      },
      {
        path: "succes",
        element: <Succes/>
      },
      {
        path: "/admin",
        element: <Dashboard/>
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard/>
      },
      {
        path: "/admin/carousel",
        element: <EditCarousel/>
      },
      {
        path: "/admin/add-product",
        element: <AddProduct/>
      },
      {
        path: "*",
        errorElement: <ErrorPage />
      }
    ],
  },
  {
    path: ".",
    errorElement: <ErrorPage />
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