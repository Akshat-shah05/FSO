// eslint-disable-next-line react/prop-types
const Form = ({addNote, noteChange, newNote}) => {
  return (
    <form onSubmit={addNote}>
        <input onChange={noteChange} value={newNote}/>
        <button type="submit">save</button>
    </form>
  )
}

export default Form