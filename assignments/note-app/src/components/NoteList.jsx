import React, { useContext, useState } from "react";
import NoteItem from "./NoteItem";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "./NotesContext";

const NotesList = () => {
  const { notes } = useContext(NotesContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // filter notes by heading or description
  const filteredNotes = notes.filter(
    (note) =>
      note.heading.toLowerCase().includes(search.toLowerCase()) ||
      note.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 border-white w-100 h-auto rounded relative  mx-auto shadow-lg shadow-cyan-500/50 mt-5 mb-5">
      <h2 className="text-xl text-center font-bold mb-4">All Notes</h2>

      <button
        onClick={() => navigate("/")}
        className="bg-gray-300 px-4 py-2 mx-30 rounded mb-4"
      >
        Back to Home
      </button>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full max-w-md mb-4"
      />

      <div className="grid gap-4">
        {filteredNotes.length === 0 && <p>No notes found.</p>}
        {filteredNotes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NotesList;
