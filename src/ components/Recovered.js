import React, { useState, useEffect } from 'react';

export function RecoveredCases() {
  const [recoveredCases, setRecoveredCases] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchCoronaData() {
      const response = await fetch(`https://covid19.mathdro.id/api/recovered`).then(response => response.json())
      setRecoveredCases(response)
      setLoading(false)
    }
    fetchCoronaData()
  }, [])
  if (loading) return <h1>Loading.....</h1>
  const totalRecoveredCases = recoveredCases.reduce((final, cv) => final + cv.recovered, 0)
  return (
    <div className="recovered">
      <label>Recovered</label>
      <p>{totalRecoveredCases}</p>
    </div>
  );
}