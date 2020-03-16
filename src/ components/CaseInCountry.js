import React, { useState, useEffect } from 'react'
import { Alert } from 'antd';
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
        <div className="confirmed">
          <label>Confirmed</label>
          <p>{caseInCountry.confirmed.value}</p>
        </div>

        <div className="recovered">
          <label>Recovered</label>
          <p>{caseInCountry.recovered.value}</p>
        </div>
        <div className="deaths">
          <label>Recovered</label>
          <p>{caseInCountry.deaths.value}</p>
        </div>
      </div >
    </div >
  )
}

export default CaseInCountry
