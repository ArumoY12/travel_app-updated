import React from 'react'
import ReactDOM from 'react-dom/client'
import Travel from './Travel.jsx'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Travel />
  </React.StrictMode>
  </BrowserRouter>
)
