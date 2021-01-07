import React from 'react'
import Person from './Person'

const Persons = props => {
  if (props.newSearch === '') {
    return props.persons.map(person => (
      <Person key={person.name} name={person.name} number={person.number} />
    ))
  } else {
    let personsByName = props.persons.filter(props.filterByName)

    return personsByName.map(person => (
      <Person key={person.name} name={person.name} number={person.number} />
    ))
  }
}

export default Persons
