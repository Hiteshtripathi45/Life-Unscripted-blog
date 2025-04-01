import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./css/index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from './pages/signup';
import Home from './pages/home';
import { BlogProvider } from "./context/BlogContext";
import Detailpost from './pages/detailpost';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path:"post/:id",
    element:<Detailpost/>
  },
  {
    path:"register",
    element:<Signup/>
  }
  
]);





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BlogProvider>
      <RouterProvider router={router} />
    </BlogProvider>  
  </StrictMode>
)
