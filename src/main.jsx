import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ExcuseProvider } from './context/ExcuseContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExcuseProvider>
      <App />
    </ExcuseProvider>
  </StrictMode>,
)
