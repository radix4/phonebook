import React, { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Thang Cao', id: 'Thang Cao' },
    { name: 'Clever Charlotte', id: 'Clever Charlotte' },
  ])
  const [newName, setNewName] = useState('') //newName is for controlling the form input element

  const addPerson = event => {
    event.preventDefault()

    const personObject = {
      name: newName,
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

  return (
    <div>
      <h2>Phonebook</h2>

      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <button type='submit'>add</button>
        </div>
      </form>

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
