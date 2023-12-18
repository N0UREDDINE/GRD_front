import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      key: '0',
      label: <Link to="#"></Link>,
    },
    {
      key: '0',
      label: <Link to="#"></Link>,
    },
    {
      key: '1',
      icon: <PieChartOutlined />,
      label: <Link to="/create-agency">Créer une Agence</Link>,
    },
    {
      key: '2',
      icon: <DesktopOutlined />,
      label: <Link to="/agency-list">Liste des Agences</Link>,
    },
    {
      key: '3',
      icon: <UserOutlined />,
      label: 'Option 1',
      children: [
        {
          key: 'sub1',
          label: <Link to="/option1">Option A</Link>,
        },
        {
          key: 'sub2',
          label: <Link to="/option2">Option B</Link>,
        },
        
      ],
    },
    {
      key: '4',
      icon: <TeamOutlined />,
      label: 'Team',
      children: [
        {
          key: 'sub3',
          label: <Link to="/team1">Team 1</Link>,
        },
        {
          key: 'sub4',
          label: <Link to="/team2">Team 2</Link>,
        },
        
      ],
    },
    {
      key: '5',
      icon: <FileOutlined />,
      label: <Link to="/files">Dossier</Link>,
    },
  ];

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  );
};

export default Sidebar;
