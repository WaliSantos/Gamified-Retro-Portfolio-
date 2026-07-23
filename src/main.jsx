import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'
import Cabinet from './pages/Cabinet.jsx'
import Menu from './pages/Menu.jsx'
import Papers from './pages/Papers.jsx'
import Projects from './pages/Projects.jsx'
import Profile from './pages/Profile.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Cabinet/>,
      },
      {
        path: "/menu",
        element: <Menu/>,
      },
      {
        path: "/papers",
        element: <Papers/>,
      },
      {
        path: "/projects",
        element: <Projects/>,
      },
      {
        path: "/profile",
        element: <Profile/>,
      }
    ]
  },
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
