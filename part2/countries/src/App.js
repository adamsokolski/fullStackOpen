import { useState, useEffect } from 'react'
import axios from 'axios'

import Find from './components/Find'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesFiltered, setCountriesFiltered] = useState([])
  const [userFilter, setUserFilter] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      const countries = response.data
      setCountries(countries)
    })
  }, [])

  useEffect(() => {
    setCountriesFiltered(
      countries.filter((country) => country.name.common.includes(userFilter))
    )
  }, [countries, userFilter])

  const handleFilterChange = (event) => {
    setUserFilter(event.target.value)
  }

  return (
    <div>
      <div>
        debug: userFilter: {userFilter}, countriesLength:{' '}
        {countriesFiltered.length}
      </div>
      <Find value={userFilter} handle={handleFilterChange} />
      {countriesFiltered.length > 10 &&
        `Too many matches, specify another filter`}
      {countriesFiltered.length > 0 && (
        <Countries countriesFiltered={countriesFiltered} />
      )}
    </div>
  )
}

export default App
