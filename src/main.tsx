import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import ErrorPage from './error-page';
import Template from './features/templates/template';
import PostView from './features/organisms/post-view/postView';
import PostPreview from './features/molecules/post-preview/postPreview';

import { $PostsChain } from './scripts/data_structures/node';
import createChainLink from './scripts/creator';

let news = new $PostsChain();
let astronomy = new $PostsChain();
let economics = new $PostsChain();
let health = new $PostsChain();
let technology = new $PostsChain();

createChainLink("news worldwide", news)

const test = async () => {
  const body = await fetch("https://www.reddit.com/user/r-nasa-mods/submitted.json");
  const response = await body.json();
  console.log(response)
}
//test()


// ************************************
const router = createBrowserRouter([
  {
    path: '/',
    element: <Template data={[]} grid="first"/>,
    errorElement: <ErrorPage />,
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