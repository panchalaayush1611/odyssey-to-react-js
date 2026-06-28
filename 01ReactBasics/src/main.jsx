import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Coffee from './try.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <h1>this is rendered from main.jsx file</h1>
    <Coffee />
  </StrictMode>,
)
