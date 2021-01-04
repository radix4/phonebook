import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Thang Cao', number: '15531232314', id: 'Thang Cao' },
    { name: 'Machine', number: '101010001001', id: 'Machine' },
  ])
  const [newName, setNewName] = useState('') //newName is for controlling the form input element
  const [newNumber, setNewNumber] = useState('')

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
  }

  const handleNameChange = event => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = event => {
    //console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
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
      <div>
        {persons.map(person => (
          <Person key={person.name} name={person.name} number={person.number} />
        ))}
      </div>
    </div>
  )
}

export default App
