/* eslint-disable react/prop-types */
const Note = ({ note, toggleImportance, noteDelete }) => {
    const label = note.important ? "make not important" : 'make important'
    return (
      <li>
        {note.content}
        <br />
        <button onClick={toggleImportance}>{label}</button>
        <button 
          onClick={noteDelete}
          style={{backgroundColor: "blue", color:"white"}}> Delete 
        </button>
      </li>
    )
  }
  
  export default Note