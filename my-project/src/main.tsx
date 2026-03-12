import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Feed from './Routes/Feed.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
{
  path: '/Feed',
  element: <Feed/>,
  errorElement: <div>404 Not Found</div>
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
    <App />
    </HashRouter>
    <RouterProvider router={router} />
  </StrictMode>,
)