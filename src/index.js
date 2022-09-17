import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import RandomGalleryAnimal from './components/galleryanimal';
import RandomZooPage from './routes/RandomZoo.page';
import Homepage from './components/home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/randomZoo",
        element: <RandomZooPage />,
      },
      {
        path: "/randomGallery",
        element: <RandomGalleryAnimal />,
      },
    ]
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
