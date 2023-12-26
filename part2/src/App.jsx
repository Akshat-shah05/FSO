/* eslint-disable react/prop-types */

const Note = ({ content }) => {
  return (
    <li>{content}</li>
  )
}

const App = ({ notes }) => {

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => {
          return (
            <Note key={note.id} content={note.content}/>
          )
        })}
      </ul>
    </div>
  )
}

export default App