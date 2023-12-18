// App.js
import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import ApiCall from './ApiCall';  // Import the ApiCall component
import './App.css';

const { Header, Footer } = Layout;

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className="site-layout">
      </Layout>
    </Layout>
  );
};

export default App;
