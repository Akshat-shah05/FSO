/* eslint-disable react/prop-types */

const Filter = ({ search, filterChange }) => {
  return (
    <>
       Filter: <input value={search} onChange={filterChange}/>
    </>
  )
}

export default Filter