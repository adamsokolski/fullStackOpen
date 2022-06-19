import { useState, useEffect } from 'react'
import axios from 'axios'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [personsFiltered, setPersonsFiltered] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then((response) => {
      const personsFetched = response.data
      setPersons(personsFetched)
    })
  }, [])

  useEffect(() => {
    setPersonsFiltered(
      persons.filter((person) => person.name.includes(nameFilter))
    )
    console.log('Filtered set')
  }, [persons, nameFilter])

  const handleSubmit = (event) => {
    event.preventDefault()
    if (persons.find((person) => person.name === newName) === undefined) {
      const newPersons = persons.concat({
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      })
      setPersons(newPersons)
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${newName} is already added to phonebook 😕`)
    }
  }

  const handleNewName = (event) => {
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value)
    setPersonsFiltered(
      persons.filter((person) => person.name.includes(event.target.value))
    )
  }

  return (
    <>
      <div>
        <h2>Phonebook</h2>

        <Filter value={nameFilter} handle={handleFilterChange} />

        <h3>add a new</h3>

        <PersonForm
          newName={newName}
          newNumber={newNumber}
          handleSubmit={handleSubmit}
          handleNewName={handleNewName}
          handleNewNumber={handleNewNumber}
        />

        <h3>Numbers</h3>

        <Persons personsFiltered={personsFiltered} />
      </div>
    </>
  )
}

export default App
