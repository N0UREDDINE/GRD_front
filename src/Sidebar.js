import React, { useState, useEffect } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';


const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [

  getItem(''),
  getItem(''),
  getItem('Créer une Agence ', '1', <PieChartOutlined />),
  getItem('Recherche', '2', <DesktopOutlined />),
  getItem('Option 1', 'sub1', <UserOutlined />, [
    getItem('option A', '3'),
    getItem('option B', '4'),
    getItem('option C', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Dossier', '9', <FileOutlined />),
];

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [sidebarColor, setSidebarColor] = useState('');

  useEffect(() => {
    // Retrieve the background color of the sidebar dynamically
    const sidebarColor = getComputedStyle(document.querySelector('.ant-layout-sider')).backgroundColor;
    setSidebarColor(sidebarColor);
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: sidebarColor }}>
          {/* Add any header content here */}
        </Header>
        <Content />
          
        
           
 
        <Footer style={{ textAlign: 'center' }}>GRD</Footer>
      </Layout>
    </Layout>
  );
};

export default App;
