import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import styles from './styles.module.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Home/>
  </React.StrictMode>
);

