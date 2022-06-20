import { useState, useEffect } from 'react'
import axios from 'axios'

const Countries = ({ countriesFiltered, setUserFilter }) => {
  const [cityWeather, setCityWeather] = useState({})

  useEffect(() => {
    if (countriesFiltered.length === 1) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${countriesFiltered[0].capital}&appid=${process.env.REACT_APP_OPEN_WHEATHER_API}&units=metric`
        )
        .then((response) => {
          const weather = response.data
          setCityWeather(weather)
          console.log(weather)
        })
    }
  }, [countriesFiltered])

  const countriesLength = countriesFiltered.length
  if (countriesLength === 1) {
    const country = countriesFiltered[0]
    return (
      <div>
        <h2>{country.name.common}</h2>
        capital {country.capital} <br />
        area {country.area} <br /> <br />
        <div>
          <strong>languages</strong>
          <ul>
            {country.languages &&
              Object.keys(country.languages).map((keyName, i) => (
                <li key={i}>{country.languages[keyName]}</li>
              ))}
          </ul>
        </div>
        <img
          width={150}
          src={country.flags.png}
          alt={`flag of ${country.name.common}`}
        />
        <h3>Wheather in {country.capital}</h3>
        {cityWeather.main ? (
          <>
            <span>temperature {cityWeather.main.temp} Celcius</span> <br />
            <img
              src={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
              alt={cityWeather.weather[0].description}
            />{' '}
            <br />
            <span>wind {cityWeather.wind.speed} m/s</span>
          </>
        ) : (
          'Loading...'
        )}
      </div>
    )
  } else if (countriesLength > 1 && countriesLength <= 10) {
    return (
      <div>
        {countriesFiltered.map((country) => (
          <p key={country.name.common}>
            {country.name.common}{' '}
            <button onClick={() => setUserFilter(country.name.common)}>
              show
            </button>
          </p>
        ))}
      </div>
    )
  }
}

export default Countries
