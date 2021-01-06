import React, { useState } from 'react'
import Person from './components/Person'

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

  const handleNameChange = event => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearch = event => {
    //console.log(event.target.value)
    setNewSearch(event.target.value)
  }

  function filterByName(person) {
    return person.name.toLowerCase().indexOf(newSearch) !== -1
  }

  function displayNumbers() {
    if (newSearch === '') {
      return persons.map(person => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))
    } else {
      let personsByName = persons.filter(filterByName)

      return personsByName.map(person => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input value={newSearch} onChange={handleSearch}></input>
      </div>
      <form onSubmit={addPerson}>
        <h2>add a new</h2>
        <div>
          <div>
            name: <input value={newName} onChange={handleNameChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
          </div>
          <div>
            <button type='submit'>add</button>
          </div>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>{displayNumbers()}</div>
    </div>
  )
}

export default App
