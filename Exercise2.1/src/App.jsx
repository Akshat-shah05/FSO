import Content from './components/Content'
import Form from './components/Form'
import Filter from './components/Filter'
import { useState } from 'react'

const App = () => {
  const [filteredPersons, setFilteredPersons] = useState([])
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phone: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phone: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phone: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    let contains = persons.some(person => person.name.toLowerCase() === newName.toLowerCase())
    {contains
    ? alert(`${newName} is already in the list`) 
    : setPersons(persons.concat({name: newName, 
                                 phone: newPhone}))
      setNewName('')
      setNewPhone('')}
  }

  const nameChange = (e) => {
    setNewName(e.target.value)
  }

  const phoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  const filterChange = (e) => {
    setSearch(e.target.value)
    const regex = new RegExp( search, 'i' );
    const fp = () => persons.filter(person => person.name.match(regex))
    setFilteredPersons(fp)
  }

  return (
    <>
      <div>
        <h2>Filter</h2>
        <Filter 
          search={search}
          filterChange={filterChange}
        />

        <h2>Phonebook</h2>

        <Form 
          handleSubmit={handleSubmit}
          nameChange={nameChange}
          newName={newName}
          phoneChange={phoneChange}
          newPhone={newPhone}
        />

        <h2>Numbers</h2>
      </div>
      <Content persons={persons} filteredPersons={filteredPersons} search={search}/>
    </>
  )
}

export default App