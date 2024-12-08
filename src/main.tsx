import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Home from './components/Home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Home/>
  </StrictMode>,
)
