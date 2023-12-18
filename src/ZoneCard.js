import React from 'react';
import { Card } from 'antd';

const ZoneCard = ({ zone }) => {
  return (
    <Card title={zone.name} bordered={false} style={{ width: 300, margin: '15px' }}>
      <p>More details about {zone.name}...</p>
      {/* You can add more details about the zone here */}
    </Card>
  );
};

export default ZoneCard;
