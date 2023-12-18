// AgencyListView.js
import React, { useEffect, useState } from 'react';
import { Table, Space, Button } from 'antd';
import axios from 'axios';

const AgencyListView = () => {
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/agencies/')
      .then(response => {
        setAgencies(response.data);
      })
      .catch(error => console.error('Error fetching agencies:', error));
  }, []);

  const columns = [
    // Define your columns here, like:
    { title: 'Zone', dataIndex: 'zone', key: 'zone' },
    { title: 'Nomination', dataIndex: 'nomination', key: 'nomination' },
    // Add other columns as per your design
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button onClick={() => editAgency(record.id)}>Modif</Button>
          <Button danger onClick={() => deleteAgency(record.id)}>Supp</Button>
        </Space>
      ),
    },
  ];

  const editAgency = (id) => {
    // Handle the edit action
  };

  const deleteAgency = (id) => {
    // Handle the delete action
  };

  return <Table columns={columns} dataSource={agencies} />;
};

export default AgencyListView;
// import React, { useRef, useState } from 'react';
// import Highlighter from 'react-highlight-words';
// import { Button, Input, Space, Table, Layout } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';

// import './App.css';
// import Sidebar from './Sidebar';

// const { Header,Content } = Layout;

// const data = [
//   {
//     key: '1',
//     name: 'salma',
//     age: 32,
//     address: 'agadir',
//   },
//   {
//     key: '2',
//     name: 'Noureddine',
//     age: 42,
//     address: ' casablanca',
//   },
//   {
//     key: '3',
//     name: 'fatima',
//     age: 32,
//     address: 'Rabat',
//   },
  
// ];

// const App = () => {
//   const [searchText, setSearchText] = useState('');
//   const [searchedColumn, setSearchedColumn] = useState('');
//   const searchInput = useRef(null);

//   const handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     setSearchText(selectedKeys[0]);
//     setSearchedColumn(dataIndex);
//   };

//   const handleReset = (clearFilters) => {
//     clearFilters();
//     setSearchText('');
//   };

//   const getColumnSearchProps = (dataIndex) => ({
//     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
//       <div
//         style={{
//           padding: 8,
//         }}
//         onKeyDown={(e) => e.stopPropagation()}
//       >
//         <Input
//           ref={searchInput}
//           placeholder={`Search ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//           onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
//           style={{
//             marginBottom: 8,
//             display: 'block',
//           }}
//         />
//         <Space>
//           <Button
//             type="primary"
//             onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
//             icon={<SearchOutlined />}
//             size="small"
//             style={{
//               width: 90,
//             }}
//           >
//             Search
//           </Button>
//           <Button
//             onClick={() => clearFilters && handleReset(clearFilters)}
//             size="small"
//             style={{
//               width: 90,
//             }}
//           >
//             Reset
//           </Button>
//           <Button
//             type="link"
//             size="small"
//             onClick={() => {
//               confirm({
//                 closeDropdown: false,
//               });
//               setSearchText(selectedKeys[0]);
//               setSearchedColumn(dataIndex);
//             }}
//           >
//             Filter
//           </Button>
//           <Button
//             type="link"
//             size="small"
//             onClick={() => {
//               close();
//             }}
//           >
//             Close
//           </Button>
//         </Space>
//       </div>
//     ),
//     filterIcon: (filtered) => (
//       <SearchOutlined
//         style={{
//           color: filtered ? '#1677ff' : undefined,
//         }}
//       />
//     ),
//     onFilter: (value, record) =>
//       record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
//     onFilterDropdownOpenChange: (visible) => {
//       if (visible) {
//         setTimeout(() => searchInput.current?.select(), 100);
//       }
//     },
//     render: (text) =>
//       searchedColumn === dataIndex ? (
//         <Highlighter
//           highlightStyle={{
//             backgroundColor: '#ffc069',
//             padding: 0,
//           }}
//           searchWords={[searchText]}
//           autoEscape
//           textToHighlight={text ? text.toString() : ''}
//         />
//       ) : (
//         text
//       ),
//   });

//   const columns = [
//     {
//       title: 'Id Dossier',
//       dataIndex: 'id_dossier',
//       key: 'id_dossier',
//       width: '14%',
//       ...getColumnSearchProps('id_dossier'),
//     },
//     {
//       title: 'Nom et Prenom',
//       dataIndex: 'nom_prenom',
//       key: 'nom_prenom',
//       width: '14%',
//       ...getColumnSearchProps('nom_prenom'),
//     },
//     {
//       title: 'Doc et Service',
//       dataIndex: 'doc_service',
//       key: 'doc_service',
//       width: '14%',
//       ...getColumnSearchProps('doc_service'),
      
//     },
//     {
//       title: 'Prix',
//       dataIndex: 'prix',
//       key: 'prix',
//       width: '14%',
//       ...getColumnSearchProps('prix'),
//       sorter: (a, b) => a.address.length - b.address.length,
//       sortDirections: ['descend', 'ascend'],
//     },
//     {
//       title: 'Statut',
//       dataIndex: 'Statut',
//       key: 'Statut',
//       width: '14%',
//       ...getColumnSearchProps('Statut'),
      
//     },
//     {
//       title: 'Modifer/Supprimer',
//       dataIndex: 'Statut',
//       key: 'Statut',
//       width: '14%',
     
      
//     },
//   ];

//   return (
  
//     <Layout style={{ minHeight: '100vh' }}>
    
//       <Sidebar/>
//       <Content style={{ margin: '0 16px' }}>
      
//       <Table columns={columns} dataSource={data} />
      
//       </Content>
    
//     </Layout>
//   );
// };

// export default App;
