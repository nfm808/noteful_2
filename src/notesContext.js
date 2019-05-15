import React from 'react';

const NotesContext = React.createContext({
  folders: [{}],
  notes: [{}],
  addNote: () => {},
  deleteNote: () => {},
  deleteFolder: () => {},
  addFolder: () => {}
});

export default NotesContext