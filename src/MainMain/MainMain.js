import React from 'react'
import { NavLink } from 'react-router-dom'
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
            <p>Date Modified on <Moment format="Do MMM YYYY">{note.modified}</Moment></p>
          </li>
        )}
      </ul>
    </section>
  )
}
