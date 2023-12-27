import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function onClick(note) {
    setNotes((prevNote) => {
      return [...prevNote, note];
    });
  }
  function deleteNote(id) {
    console.log(id);
    setNotes((prevNote) => {
      return prevNote.filter((noteItem, index) => {
        return index !== id;
      });
    });
    console.log(notes);
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={onClick} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
