import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Thang Cao', number: '15-531232314' },
    { name: 'Machine', number: '10-1010001001' },
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ])
  const [newName, setNewName] = useState('') //newName is for controlling the form input element
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const addPerson = event => {
    event.preventDefault()

    const personObject = {
      name: newName,
      number: newNumber,
      id: newName,
    }

    const found = persons.some(person => person.name === newName)
    console.log(found)

    if (found) window.alert(`${newName} is already added to phonebook`)
    else setPersons(persons.concat(personObject))

    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = event => setNewName(event.target.value)

  const handleNumberChange = event => setNewNumber(event.target.value)

  const handleSearch = event => setNewSearch(event.target.value)

  function filterByName(person) {
    return person.name.toLowerCase().indexOf(newSearch) !== -1
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newSearch} onChange={handleSearch} />
      <h3>add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <h3>Numbers</h3>

      <Persons
        newSearch={newSearch}
        persons={persons}
        filterByName={filterByName}
      />
    </div>
  )
}

export default App
