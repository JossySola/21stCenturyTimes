import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import ErrorPage from './error-page';
import Template from './features/templates/main-temp';
import { getUserlessAuthorization } from './scripts/authorization';

let userless = window.localStorage.getItem("userless");

if (!userless) {
  //const userlessToken = getUserlessAuthorization();
}

/*
  1. First send an API request to see if there is a connection


*/

// ************************************
const router = createBrowserRouter([
  {
    path: '/',
    element: <Template data={[]}/>,
    errorElement: <ErrorPage />
    
  },
]);

// ************************************
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)