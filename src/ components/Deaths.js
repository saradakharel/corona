import React, { useState, useEffect } from 'react';

export function Deaths() {
  const [deaths, setDeaths] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchCoronaData() {
      const response = await fetch(`https://covid19.mathdro.id/api/deaths`).then(response => response.json())
      setDeaths(response)
      setLoading(false)
    }
    fetchCoronaData()
  }, [])
  if (loading) return <h1>Loading.....</h1>
  const totalDeaths = deaths.reduce((final, cv) => final + cv.deaths, 0)

  return (
    <>
      {totalDeaths}
    </>
  );
}





