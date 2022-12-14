import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Menu from './components/Menu'
import Buscador from './components/Buscador'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='container mx-auto'>
      <Menu />
      <Buscador />
      <App />
    </div>
  </React.StrictMode>,
)
