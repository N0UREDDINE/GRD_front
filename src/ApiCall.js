import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ZoneCard from './ZoneCard'; // Import the ZoneCard component
import { Row, Col } from 'antd';

function ApiCall() {
  const [zones, setZones] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/zones/')
      .then(response => {
        setZones(response.data);
      })
      .catch(error => console.error('Error fetching zones:', error));
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <Row gutter={16}>
        {zones.map(zone => (
          <Col span={8} key={zone.id}>
            <ZoneCard zone={zone} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ApiCall;
