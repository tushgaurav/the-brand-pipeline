import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Design2 from './designs/Design2'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Design2 />
  </StrictMode>,
)
