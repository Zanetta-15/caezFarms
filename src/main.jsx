// Entry point for the React application
// This is where React mounts the App component to the DOM

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Create root React element and render the App component
// This finds the element with id="root" in index.html and renders React there
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
