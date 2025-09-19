import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "./NotesContext";

const NoteItem = ({ note }) => {
  const { deleteNote } = useContext(NotesContext);
  const navigate = useNavigate();

  return (
    <div className="border-white p-3 rounded shadow transform transition-transform duration-500 hover:scale-103 ">
      <h3 className="font-bold">{note.heading}</h3>
      <p>{note.description}</p>
      <div className="mt-2 flex gap-2">
        <button
          onClick={() => navigate(`/edit/${note.id}`)}
          className="bg-yellow-500 text-white px-2 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => deleteNote(note.id)}
          className="bg-red-500 text-white px-2 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteItem;
