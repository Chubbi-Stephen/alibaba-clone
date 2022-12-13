import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import ErrorBoundary from './utils/ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import App from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
