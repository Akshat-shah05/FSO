/* eslint-disable react/prop-types */
import Person from "./Person"

const Content = ({ persons, filteredPersons, search }) => {
    if (filteredPersons.length === 0 || search.length === 0) {
        return (
            <ul>
                {persons.map((person) => {
                return <Person key={person.name} name={person.name} phone={person.phone}/>
                })}
            </ul>
        )
    } else {
        return (
            <ul>
                {filteredPersons.map((person) => {
                return <Person key={person.name} name={person.name} phone={person.phone}/>
                })}
            </ul>
        )
    }
    
    
}

export default Content