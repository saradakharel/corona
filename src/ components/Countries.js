import React, { useState, useEffect } from 'react'
import CaseInCountry from './CaseInCountry'



function Countries() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('Finland')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchCountries() {
      const response = await fetch(`https://covid19.mathdro.id/api/countries`).then(response => response.json())
      console.log({ response })
      setCountries(response.countries)
      setLoading(false)
    }
    fetchCountries()
  }, [])


  if (loading) return <h1>Loading....</h1>
  return (
    <div className="countries">
      <select style={{ display: 'block', width: '20%', margin: '1rem auto' }} value={country} onChange={(e) => setCountry(e.target.value)}>
        {Object.entries(countries).map(([key]) =>
          <option key={key} value={key}>
            {key}
          </option>
        )}
      </select>
      <CaseInCountry currentCountry={country} />
    </div >
  )
}

export default Countries
