import React, { createContext, useState } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  // Add Note
  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };

  // Delete Note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Edit Note
  const editNote = (id, updatedNote) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, ...updatedNote } : note))
    );
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {children}
    </NotesContext.Provider>
  );
};
