import React, { useState, useEffect } from 'react';

export function ConfirmedCases() {
  const [confirmedCases, setConfirmedCases] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchCoronaData() {
      const response = await fetch(`https://covid19.mathdro.id/api/confirmed`).then(response => response.json())
      setConfirmedCases(response)
      setLoading(false)
    }
    fetchCoronaData()
  }, [])
  if (loading) return <h1>Loading.....</h1>
  const totalConfirmedCases = confirmedCases.reduce((final, cv) => final + cv.confirmed, 0)
  console.log({ totalConfirmedCases })
  return (
    <div className="confirmed">
      <label>Confirmed</label>
      <p>{totalConfirmedCases}</p>
    </div>
  );
}