// SCSS RESET
import './styles/reset.scss'

// CSS
import './index.css'

// REACT
import React from 'react'
import ReactDOM from 'react-dom/client'

// ROUTER
import RoutesApp from './router/intex';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutesApp />
  </React.StrictMode>
)