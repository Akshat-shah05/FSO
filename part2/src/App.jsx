/* eslint-disable react/prop-types */

import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
 
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: notes.length + 1,
      content: newNote, 
      important: Math.random() < 0.5
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const noteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  console.log(newNote)
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
          <input onChange={noteChange} value={newNote}/>
          <input onChange={phoneChange} value={newPhone} />
          <button type="submit">save</button>
      </form>
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "mportant" : "All"}
      </button>
    </div>
  )
}

export default App 