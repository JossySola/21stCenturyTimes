import React, { useState } from 'react';
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

 import $Handler from './scripts/classes/state';
 import getComments from './scripts/get_comments';

const postHandler = new $Handler();
const commentHandler = new $Handler();

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
        path: ':article/r/:subreddit/comments/:postId/:postTitle',
        element: <PostView dataObject={postHandler} status="fulfilled" />,
        errorElement: <ErrorPage />,
        loader: newsLoader
      },
      {
        path: 'news',
        element: <Posts grid="first" postHandler={postHandler}/>,
        errorElement: <ErrorPage />,
        loader: newsLoader,
        children: [
          {
            path: ":article/r/:subreddit/comments/:postId/:postTitle",
            element: <PostView dataObject={postHandler} status="pending"/>,
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
            path: ":article/r/:subreddit/comments/:postId/:postTitle",
            element: <PostView dataObject={postHandler} status="pending"/>,
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
            path: ":article/r/:subreddit/comments/:postId/:postTitle",
            element: <PostView dataObject={postHandler} status="pending"/>,
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
            path: ":article/r/:subreddit/comments/:postId/:postTitle",
            element: <PostView dataObject={postHandler} status="pending"/>,
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
            path: ":article/r/:subreddit/comments/:postId/:postTitle",
            element: <PostView dataObject={postHandler} status="pending"/>,
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