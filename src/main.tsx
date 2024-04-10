import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import ErrorPage from './error-page';
import Template from './features/templates/template';
import PostView from './features/organisms/post-view/postView';
import PostPreview from './features/molecules/post-preview/postPreview';

import getPostsAbout from './scripts/creator';


const newsLoader = async () => {
  const posts = await getPostsAbout("news worldwide");
  return posts;
}

// ************************************
const router = createBrowserRouter([
  {
    path: '/',
    element: <Template grid="first"/>,
    errorElement: <ErrorPage />,
    loader: newsLoader,
    children: [
      {
        path: 'astronomy',
        element: <PostPreview />
      },
      {
        path: 'economics',
        element: <PostPreview />
      },
      {
        path: 'health',
        element: <PostPreview />
      },
      {
        path: 'technology',
        element: <PostPreview />
      },
      {
        path: 'articles/:articleId',
        element: <PostView />
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