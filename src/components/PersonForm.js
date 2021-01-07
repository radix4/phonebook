import React from 'react'

const PersonForm = props => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div>
          <div>
            name:{' '}
            <input value={props.newName} onChange={props.handleNameChange} />
          </div>
          <div>
            number:{' '}
            <input
              value={props.newNumber}
              onChange={props.handleNumberChange}
            />
          </div>
          <div>
            <button type='submit'>add</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
