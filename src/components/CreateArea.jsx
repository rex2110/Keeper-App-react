import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  };
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
          onChange={handleChange}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
