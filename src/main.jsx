import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ExpensesProvider from './contexts/ExpensesContext.jsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}>
    <ExpensesProvider>
      <App />
    </ExpensesProvider>,
  </I18nextProvider>
)
