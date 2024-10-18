import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import RecipeStore from './redux/RecipeStore.js'
import './bootstrap.min.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={RecipeStore}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)