import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Thang Cao' },
    { name: 'Clever Charlotte' },
  ])
  const [newName, setNewName] = useState('') //newName is for controlling the form input element

  const addPerson = event => {
    event.preventDefault()
    console.log('button  clicked', event.target)

    const personObject = {
      name: newName,
      id: newName,
    }

    setPersons(persons.concat(personObject))
    setNewName('')
  }

  const handleNameChange = event => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <button type='submit'>add</button>
        </div>
      </form>

      <div>debug: {newName}</div>

      <h2>Numbers</h2>
      <div>
        {persons.map(person => (
          <Person key={person.name} name={person.name} />
        ))}
      </div>
    </div>
  )
}

export default App
