import React from 'react'
import NotesContext from '../notesContext'
import { findNote, findFolder } from '../notes-helpers'

class NoteSidebar extends React.Component {
  static contextType = NotesContext;
  render() {
    const { notes, folders } = this.context;
    const { noteId } = this.props.match.params;
    const note = findNote(notes, noteId) || {};
    const folder = findFolder(folders, note.folderId)

    return (
      <section className='MainSidebar'>
        <p>{folder.name}</p>
      </section>  
    )
  }
}


export default NoteSidebar

