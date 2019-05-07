import React from 'react'
import Moment from 'react-moment'
import './NoteMain.css'

export default function NoteMain(props) {
  const { note } = props
  console.log('NoteMain props:', note)
  const noteItem = (!note) ? null 
                  : <>
                      <ul className="NoteMain__list">
                        <li key={note.id} className="NoteMain__list-item">
                          <h4 className="MainMain__note-link">{note.name}</h4>
                          <p>Date Modified on <Moment format="Do MMM YYYY">{note.modified}</Moment></p>
                      </li>
                      </ul>
                      <p className="NoteMain__content">{note.content}</p>
                    </>
        
  return (
    <section className="NoteMain">
      {noteItem}
    </section>
  )
}
