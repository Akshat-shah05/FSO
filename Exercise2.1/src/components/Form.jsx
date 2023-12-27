/* eslint-disable react/prop-types */

const Form = ({ handleSubmit, nameChange, newName, phoneChange, newPhone }) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
        <div>name: <input onChange={nameChange} value={newName}/></div>
        <div>phone: <input onChange={phoneChange} value={newPhone}/></div>
        </div>
        <div>
        <button type="submit">add</button>
        </div>
    </form>
  )
}

export default Form