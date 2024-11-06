import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { Router } from 'react-router-dom'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
    <App />
    </Router>
</StrictMode>,
)
