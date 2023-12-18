import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoutes from './Routes'; // Importation de AppRoutes au lieu de App
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRoutes /> {/* Utilisation de AppRoutes ici */}
  </React.StrictMode>
);

reportWebVitals();
