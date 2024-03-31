import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Component/Home';
import Cars from './Component/Cars';
import Company from './Component/Company';
import Contact from './Component/footer/contact/Contact';
import ShoppingFavProvider from './context/ShoppingFavContext';
AOS.init();

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Cars",
    element: <Cars />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Company",
    element: <Company />,
  },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShoppingFavProvider>
    <RouterProvider router={router} />
  </ShoppingFavProvider>
);