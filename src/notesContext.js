import React from 'react';

const NotesContext = React.createContext({
  folders: [{}],
  notes: [{}],
  addNote: () => {},
  deleteNote: () => {},
});

export default NotesContext