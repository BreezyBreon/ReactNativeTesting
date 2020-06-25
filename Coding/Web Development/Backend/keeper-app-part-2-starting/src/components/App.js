import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "../notes";
import NoteEntry from "./Note";

function App() {
  return (
    <div>
      <Header />
      {Note.map(noteTerm => (
        <NoteEntry
          key={noteTerm.key}
          title={noteTerm.title}
          content={noteTerm.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;