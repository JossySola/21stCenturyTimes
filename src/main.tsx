import React from 'react';
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

 import $PostHandler from './scripts/classes/state';

const postHandler = new $PostHandler();

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
        element: <Posts grid="first" postHandler={postHandler}/>,
        loader: newsLoader
      },
      {
        path: 'article/:articleId',
        element: <PostView dataObject={postHandler.getPost()} />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'news',
        element: <Posts grid="first" postHandler={postHandler}/>,
        errorElement: <ErrorPage />,
        loader: newsLoader,
        children: [
          {
            path: ":article/:articleId",
            element: <PostView dataObject={postHandler.getPost()}/>,
            errorElement: <ErrorPage />
            
          }
        ]
      },
      {
        path: 'astronomy',
        element: <Posts grid="second" postHandler={postHandler}/>,
        errorElement: <ErrorPage />,
        loader: astronomyLoader,
        children: [
          {
            path: ":article/:articleId",
            element: <PostView dataObject={postHandler.getPost()}/>,
            errorElement: <ErrorPage />
            
          }
        ]
      },
      {
        path: 'science',
        element: <Posts grid="second" postHandler={postHandler}/>,
        errorElement: <ErrorPage />,
        loader: scienceLoader,
        children: [
          {
            path: ":article/:articleId",
            element: <PostView dataObject={postHandler.getPost()}/>,
            errorElement: <ErrorPage />
            
          }
        ]
      },
      {
        path: 'health',
        element: <Posts grid="second" postHandler={postHandler}/>,
        errorElement: <ErrorPage />,
        loader: healthLoader,
        children: [
          {
            path: ":article/:articleId",
            element: <PostView dataObject={postHandler.getPost()}/>,
            errorElement: <ErrorPage />
            
          }
        ]
      },
      {
        path: 'technology',
        element: <Posts grid="second" postHandler={postHandler}/>,
        errorElement: <ErrorPage />,
        loader: technologyLoader,
        children: [
          {
            path: ":article/:articleId",
            element: <PostView dataObject={postHandler.getPost()}/>,
            errorElement: <ErrorPage />
            
          }
        ]
      },
      {
        path: ':query/:articleId',
        element: <Posts grid="second" postHandler={postHandler}/>,
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