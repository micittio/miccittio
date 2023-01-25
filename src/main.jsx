import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './app/dictionaries/I18next-config'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import {I18nextProvider} from 'react-i18next'
import i18next from 'i18next'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <div className='container mx-auto'>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>  
      </div>
    </Provider>
  </React.StrictMode>
)
