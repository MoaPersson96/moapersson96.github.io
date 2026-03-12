import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Feed from './Routes/Feed.tsx'
import Widgets from './Routes/Widgets.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Widgets />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </HashRouter>
  </StrictMode>
);