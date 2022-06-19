import { useState } from 'react'

const Country = ({ country }) => {
  const [showDetails, setShowDetails] = useState(false)

  if (!showDetails) {
    return (
      <>
        <span>{country.name.common}</span>
        <button onClick={() => setShowDetails(true)}>show</button>
      </>
    )
  } else {
    return (
      <div>
        <h2>{country.name.common}</h2>
        {country.capital} <br />
        area {country.area} <br /> <br />
        <div>
          <strong>languages</strong>
          <ul>
            {Object.keys(country.languages).map((keyName, i) => (
              <li key={i}>{country.languages[keyName]}</li>
            ))}
          </ul>
        </div>
        <img
          width={150}
          src={country.flags.png}
          alt={`flag of ${country.name.common}`}
        />
      </div>
    )
  }
}

export default Country
