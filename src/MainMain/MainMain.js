import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Moment from 'react-moment'
import './MainMain.css'

export default function MainMain(props) {
  const { folders, notes } = props;

  return (
    <section className="MainMain">
      <ul className="MainMain__list">
        {notes.map(note =>
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
                  className="MainMain__add-note-button inline"
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
            tag={Link}
            to='/add-note'
            type='button'
          >
            Add Note
          </button>
        </div>
      </ul>
    </section>

  )
}
