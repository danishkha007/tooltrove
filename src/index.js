import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pages/about';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Contact from './pages/contact';
import Products from './pages/Products';
import SignUp from './pages/signup';

const router = createBrowserRouter([
  { path: "/", element: <App/> },
  { path: "about", element: <About/> },
  { path: "contact", element: <Contact/> },
  { path: "products", element: <Products/> },
  { path: "sign-up", element: <SignUp/> },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

reportWebVitals();
