import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import ErrorPage from './error-page';
import Template from './features/templates/template';
import PostView from './features/organisms/post-view/postView';
import Posts from './features/organisms/posts-overview/posts';

import { newsLoader,
  astronomyLoader,
  scienceLoader,
  healthLoader,
  technologyLoader
 } from './scripts/loaders/loaders';

// ************************************
const router = createBrowserRouter([
  {
    path: '/',
    element: <Template/>,
    errorElement: <ErrorPage />,
    loader: newsLoader,
    children: [
      {
        index: true,
        element: <Posts grid="first"/>,
        loader: newsLoader
      },
      {
        path: 'article/:articleId',
        element: <PostView />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'news',
        element: <Posts grid="first"/>,
        errorElement: <ErrorPage />,
        loader: newsLoader,
      },
      {
        path: 'astronomy',
        element: <Posts grid="second"/>,
        errorElement: <ErrorPage />,
        loader: astronomyLoader,
      },
      {
        path: 'science',
        element: <Posts grid="second"/>,
        errorElement: <ErrorPage />,
        loader: scienceLoader,
      },
      {
        path: 'health',
        element: <Posts grid="second"/>,
        errorElement: <ErrorPage />,
        loader: healthLoader,
      },
      {
        path: 'technology',
        element: <Posts grid="second"/>,
        errorElement: <ErrorPage />,
        loader: technologyLoader,
      },
      {
        path: ':query/:articleId',
        element: <Posts grid="second"/>,
        errorElement: <ErrorPage />,
      }
    ]
  },
]);

// ************************************
ReactDOM.createRoot(document.getElementById("root") as Element).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
// ************************************