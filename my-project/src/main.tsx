import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Feed from './Routes/Feed.tsx'
import Widgets from './Routes/Widgets.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path: '/Widgets',
  element: <Widgets/>,
  errorElement: <div>404 Not Found</div>
},
{
  path: '/Feed',
  element: <Feed/>,
  errorElement: <div>404 Not Found</div>
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
