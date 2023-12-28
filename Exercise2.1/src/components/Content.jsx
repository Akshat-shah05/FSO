/* eslint-disable react/prop-types */
import Person from "./Person"

const Content = ({ persons, filteredPersons, search }) => {
    if (filteredPersons.length === 0 || search.length === 0) {
        return (
            <div>
                {persons.map((person) => {
                return <Person key={person.name} name={person.name} phone={person.phone}/>
                })}
            </div>
        )
    } else {
        return (
            <div>
                {filteredPersons.map((person) => {
                return <Person key={person.name} name={person.name} phone={person.phone}/>
                })}
            </div>
        )
    }
    
    
}

export default Content