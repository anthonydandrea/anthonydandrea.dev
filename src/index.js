import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './components/Landing';
import Posts from './components/Posts';
import Projects from './components/Projects';
import Cv from './components/Cv';
import { POSTS, CV, PROJECTS } from './routes.js';

const router = createBrowserRouter([
  {
    path: `/${POSTS}`,
    element: <Posts />,
  },
  {
    path: `/${PROJECTS}`,
    element: <Projects />,
  },
  {
    path: `/${CV}`,
    element: <Cv />,
  },
  {
    path: "/*",
    element: <Landing />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
