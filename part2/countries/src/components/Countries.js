const Countries = ({ countriesFiltered }) => {
  const countries = countriesFiltered.length
  if (countries === 1) {
    const country = countriesFiltered[0]
    console.log(country)
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
  } else if (countries > 1 && countries <= 10) {
    return (
      <div>
        {countriesFiltered.map((country) => (
          <span>
            {country.name.common} {country.flag}
            <br />
          </span>
        ))}
      </div>
    )
  }
}

export default Countries
