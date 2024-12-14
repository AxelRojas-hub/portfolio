import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Home from './components/Home'
import Proyectos from './components/Proyectos'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Home/>
    <Proyectos/>
  </StrictMode>,
)
