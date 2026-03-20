import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Feed from './Routes/Feed.tsx'
import FeedDetail from './Routes/FeedDetail.tsx'
import RootLayout from './Routes/RootLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>

          <Route index element={<App />} />

          <Route path="feed">
            <Route index element={<Feed />} />
            <Route path=":slug" element={<FeedDetail />} />
          </Route>

        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);