import { useState } from 'react'

import Filter from './Filter'
import PersonForm from './PersonForm'
import Persons from './Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ])
  const [personsFiltered, setPersonsFiltered] = useState(persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [nameFilter, setNameFilter] = useState('')

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
      setPersonsFiltered(
        newPersons.filter((person) => person.name.includes(nameFilter))
      )
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
