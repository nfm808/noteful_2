import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Moment from 'react-moment'
import NotesContext from '../notesContext'
import { getNotesForFolder } from '../notes-helpers'
import './MainMain.css'

 class MainMain extends React.Component {
  static contextType = NotesContext;
  render() {

    // moved the logic to filter the notes per folder
    // to the component level and retrieve the objects
    // from context and props
    const { notes } = this.context;
    const { folderId } = this.props.match.params;
    const notesForFolder =  getNotesForFolder(notes, folderId);
    const list = (!notes) ? null 
            :  <ul className="MainMain__list">
            {notesForFolder.map(note =>
              <li key={note.id} className="MainMain__list-item">
                <NavLink 
                  to={`/note/${note.id}`}
                  className="MainMain__note-link"
                >
                  {note.name}
                </NavLink>
                <div className="MainMain__mod-delete">
                  <p className="modded-date">Date Modified on <Moment format="Do MMM YYYY">{note.modified}</Moment></p>
                  <div className="MainMain__button-container">
                    <button 
                      className="MainMain__add-note-button"
                      type="button"
                    >
                    Delete Note
                    </button>
                  </div>

                </div>
              </li>
            )}
            <div className="MainMain__button-container">
              <button 
                className="MainMain__add-note-button"
                // tag={Link}
                to='/add-note'
                type='button'
              >
                Add Note
              </button>
            </div>
          </ul>
  

    return (
      <section className="MainMain">
        {list}
      </section>
      )
    }
}

export default MainMain
