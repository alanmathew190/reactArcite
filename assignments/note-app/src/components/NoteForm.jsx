import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NotesContext } from "./NotesContext";

const NoteForm = () => {
  const { notes, addNote, editNote } = useContext(NotesContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const existingNote = notes.find((n) => n.id === Number(id));

  const [heading, setHeading] = useState(
    existingNote ? existingNote.heading : ""
  );
  const [description, setDescription] = useState(
    existingNote ? existingNote.description : ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingNote) {
      editNote(existingNote.id, { heading, description });
    } else {
      addNote({ heading, description });
    }
    navigate("/");
  };

  return (
    <div className="bg-linear-to-r from-sky-300 to-blue-200 h-screen">
      <div className="p-4 border-amber-400 border w-100 h-auto text-center rounded relative top-50 mx-auto shadow-lg shadow-cyan-500/50">
        <h2 className="text-xl font-bold mb-4">
          {existingNote ? "Edit Note" : "Add Note"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="border p-2 rounded bg-emerald-300 border-white placeholder:text-white"
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 rounded bg-purple-400  border-white placeholder:text-white"
            rows="4"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            {existingNote ? "Update Note" : "Add Note"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default NoteForm
