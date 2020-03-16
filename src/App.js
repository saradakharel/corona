import React from 'react';
import './App.css';
import { RecoveredCases } from './ components/Recovered';
import { Deaths } from './ components/Deaths';
import { ConfirmedCases } from './ components/Confirmed';
import Countries from './ components/Countries';
import { Card, Col, Row } from 'antd';


function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Corona Cases Worldwide</h1>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Confirmed" bordered={false}>
              <ConfirmedCases />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Recovered" bordered={false}>
              <RecoveredCases />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Deaths" bordered={false}>
              <Deaths />
            </Card>
          </Col>
        </Row>
      </div>
      <Countries />
    </>

  );
}

export default App;
