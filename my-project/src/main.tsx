import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
// import WHero from './Routes/Widgets/WHero.tsx'
import WPuffar from './Routes/Widgets/WPuffar.tsx'
// import WText from './Routes/Widgets/WText.tsx'
// import WTextBild from './Routes/Widgets/WTextBild.tsx'
// import WCallToAction from './Routes/Widgets/WCallToAction.tsx'
import Feed from './Routes/Feed.tsx'
import FeedDetail from './Routes/FeedDetail.tsx'
import RootLayout from './Routes/RootLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>

          <Route index element={<App />} />

          <Route path="widgets">
            <Route path="hero" element={<div>Hero</div>} />
            <Route path="puffar" element={<WPuffar />} />
            <Route path="text" element={<div>Text</div>} />
            <Route path="text-och-bild" element={<div>Text och bild</div>} />
            <Route path="call-to-action" element={<div>Call to action</div>} />
          </Route>

          <Route path="feed">
            <Route index element={<Feed />} />
            <Route path=":slug" element={<FeedDetail />} />
          </Route>

        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);