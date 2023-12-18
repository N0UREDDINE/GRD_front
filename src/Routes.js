import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ApiCall from './ApiCall';
import Sidebar from './Sidebar';
// import  Content  from  './Content';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/zones" element={<ApiCall />} />
        {/* <Route path="/Content" element={<Content />} /> */}
        {/* Ajoutez d'autres routes ici si nécessaire */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;