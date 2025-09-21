import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NotesContext } from "./NotesContext";

const NoteItem = ({ note }) => {
  const { deleteNote } = useContext(NotesContext);
  const navigate = useNavigate();

  return (
    <div className="border-white bg-amber-400 p-3 rounded shadow transform transition-transform duration-500 hover:scale-103 ">
      <img src="/pin.png" alt="" className="relative w-10 h-10 left-75" />
      {/* <img src="/pin.png" alt="" className="absolute w-10 h-10 top-10" /> */}
      <h3 className="font-bold text-xl">{note.heading}</h3>
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
