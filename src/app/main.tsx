import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'

import { Footer } from '../components/footer'
import { Header } from '../components/header'
import AppRouter from '../routes/router'
import '../styles/global.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <div className="page-content">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </Router>
  </StrictMode>,
)
