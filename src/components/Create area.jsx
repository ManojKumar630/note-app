import React, { useState } from "react";
import Note from "./Note";

function CreateArea() {
  const [note, setNote] = useState({ title: "", content: "" });
  const [notes, setNotes] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => ({ ...prevNote, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault(); 

    if (note.title.trim() !== "" || note.content.trim() !== "") {
      setNotes((prevNotes) => [...prevNotes, note]); 
      setNote({ title: "", content: "" }); 
    }
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((_, index) => index !== id));
  }

  function editNote(id, updatedTitle, updatedContent){
    setNotes((prevNotes) => prevNotes.map((note, index)=>
      index === id ? {title: updatedTitle, content: updatedContent} : note
    ))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}> {/* ✅ Added onSubmit to form */}
        <input 
          onChange={handleChange} 
          name="title" 
          value={note.title} 
          placeholder="Title" 
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button type="submit">Add</button> {/* ✅ Ensured button type is "submit" */}
      </form>

      {notes.map((item, index) => (
        <Note
          title={item.title}
          content={item.content}
          key={index}
          id={index}
          onDelete={deleteNote}
          onEdit={editNote}
        />
      ))}
    </div>
  );
}

export default CreateArea;
