import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  // const deleteNote = (id) => {
  //   setNotes((prevNotes) => {
  //     return prevNotes.filter((noteItem, index) => {
  //       return index !== id;
  //     });
  //   });

    
  const deleteNote = (id) => {
    setNotes(notes.filter((noteItem, index) => {
        return index !== id;}))
  };
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((x, index) => (
        <Note
          key={index}
          id={index}
          title={x.title}
          content={x.content}
          delete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
