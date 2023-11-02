import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/index.jsx';
import About from './pages/About/index.jsx';
import Root from './pages/Root/index.jsx';
import FeaturedCompanies from './pages/FeaturedCompanies/index.jsx';
import ErrorPage from './pages/ErrorPage/index.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "companies",
        element: <FeaturedCompanies/>
      },

    ]
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
