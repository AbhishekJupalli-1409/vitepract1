import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "about",
        element:<About/>
      },
      {
        path: "contact",
        element:<Contact/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
