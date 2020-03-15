import React, { useState, useEffect } from 'react'
import CaseInCountry from './CaseInCountry'
import { Select } from 'antd';

const { Option } = Select;


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

  function onChange(value) {
    setCountry(value)
  }
  if (loading) return <h1>Loading....</h1>
  return (
    <div className="countries">
      <Select style={{ display: 'block', width: '20%', margin: '1rem auto' }} value={country} onChange={onChange}>
        {Object.entries(countries).map(([key]) =>
          <Option key={key} value={key}>
            {key}
          </Option>
        )}
      </Select>
      <CaseInCountry currentCountry={country} />
    </div>
  )
}

export default Countries
