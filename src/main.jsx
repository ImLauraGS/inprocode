import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ExpensesProvider from './contexts/ExpensesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ExpensesProvider>
    <App />
  </ExpensesProvider>,
)
