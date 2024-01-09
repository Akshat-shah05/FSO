import axios from 'axios'
import {useState, useEffect} from 'react'

function App() {
  const [countries, setCountries] = useState([])
  const [allCountries, setAllCountries] = useState([])
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        console.log(response.data[0].name.common)
        setAllCountries(response.data)
      })
  }, [])

  const handleFilterChange = (e) => {
    setNewFilter(e.target.value)
    if (newFilter) {
      const filteredArr = allCountries.filter(country => {
        return country.name.common.toLowerCase().indexOf(newFilter.toLowerCase()) >= 0
      })
      setCountries(filteredArr)
      console.log(countries)
    } else {
      setCountries(allCountries)
    }
    
  }

  return (
    <>
      <div>
        <div>
          Find Countries <input value={newFilter} onChange={handleFilterChange} />
        </div>

      </div>
    </>
  )
}

export default App
