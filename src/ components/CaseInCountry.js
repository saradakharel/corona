import React, { useState, useEffect } from 'react'
import { Card, Col, Row, Alert } from 'antd';
function CaseInCountry({ currentCountry }) {

  const [caseInCountry, setCaseInCountry] = useState(null)
  useEffect(() => {
    async function fetchCaseInCountry() {
      const response = await fetch(`https://covid19.mathdro.id/api/countries/${currentCountry}`).then(response => response.json())
      setCaseInCountry(response)
    }
    fetchCaseInCountry()
  }, [currentCountry])
  if (!caseInCountry) return <h1>Loading...</h1>
  if (caseInCountry.error !== undefined) {
    return <Alert style={{ width: '30%', margin: 'auto' }} message={`No data found for country ${currentCountry}`} type="error" />
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Corona case in <span style={{ color: 'blue' }}>{currentCountry}</span></h1>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="Confirmed" bordered={false}>
              {caseInCountry.confirmed.value}
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ background: 'green', color: 'white' }} title="Recovered" bordered={false}>
              {caseInCountry.recovered.value}
            </Card>
          </Col>
          <Col span={8}>
            <Card style={{ background: '#cc4747', color: 'white' }} title="Deaths" bordered={false}>
              {caseInCountry.deaths.value}
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default CaseInCountry
