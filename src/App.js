// App.js
import React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import './App.css';

const { Header, Content, Footer } = Layout;

const App = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout className="site-layout">
        <Header style={{ padding: 0 }}> {/* Your header content here */} </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            {children} {/* This is where the routed content will be rendered */}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>GRD ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
