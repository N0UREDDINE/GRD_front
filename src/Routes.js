// Routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import CreateAgencyForm from './CreateAgencyForm';
import AgencyListView from './AgencyListView';
import ApiCall from './ApiCall';

const AppRoutes = () => {
  return (
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create-agency" element={<CreateAgencyForm />} />
          <Route path="/agency-list" element={<AgencyListView />} />
          <Route path="/zones" element={<ApiCall />} />
          {/* Define other routes as needed */}
        </Routes>
      </App>
    </Router>
  );
};

export default AppRoutes;
