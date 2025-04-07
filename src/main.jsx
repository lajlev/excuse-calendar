import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ExcuseProvider } from './context/ExcuseContext'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <ExcuseProvider>
        <App />
      </ExcuseProvider>
    </LanguageProvider>
  </StrictMode>,
)
