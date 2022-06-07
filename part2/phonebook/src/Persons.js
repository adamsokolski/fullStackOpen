import React from 'react'

const Persons = ({ personsFiltered }) => {
  return personsFiltered.map((person) => (
    <div key={person.name}>
      [{person.id}] {person.name} {person.number}
    </div>
  ))
}

export default Persons
