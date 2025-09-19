import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NoteForm from "./components/NoteForm";
import { NotesProvider } from "./components/NotesContext";
import NotesList from "./components/NoteList";

function App() {
  return (
    <NotesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<NotesList />} />
          <Route path="/add" element={<NoteForm />} />
          <Route path="/edit/:id" element={<NoteForm />} />
        </Routes>
      </Router>
    </NotesProvider>
  );
}

export default App;
