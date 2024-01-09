/* eslint-disable react/prop-types */

import { useState, useEffect } from 'react'
import Note from './components/Note'
import noteService from './services/notes'
import Form from './components/Form'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('a new note...')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])


  const toggleImportanceOf = (id) => {
    const note = notes.find(note => note.id === id)
    const changedNote = {... note, important: !note.important}

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      }).catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(n => n.id !== id))
      })

  }

  const noteDelete = (id) => {
    if (window.confirm(`Do you want to delete note #${id}`)) {
      axios
        .delete(`http://localhost:3001/notes/${id}`)
        .then(response => {
          console.log(response)
          setNotes(notes.map(note => note.id !== id))
        }).catch(error => {
          console.log(error)
          alert("COULDN'T BE DELETED")
        })
    }
  }

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
 
  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote, 
      important: Math.random() < 0.5
    }

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }

  const noteChange = (event) => {
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => 
          <Note 
            key={note.id} note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
            noteDelete={noteDelete}
          />
        )}
      </ul>
      <Form 
        addNote={addNote}
        noteChange={noteChange}
        newNote={newNote}
      />
      <button onClick={() => setShowAll(!showAll)}>
        show {showAll ? "important" : "All"}
      </button>
    </div>
  )
}

export default App 