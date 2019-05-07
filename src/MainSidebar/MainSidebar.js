import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './MainSidebar.css'

function MainSidebar(props) {
  const { folders, notes } = props;
  console.log( folders, notes);

  return (
    <section className='MainSidebar'>
      <ul className='MainSidebar__list'>
        {folders.map(folder =>
          <li key={folder.id}>
            <NavLink
              className="MainSidebar__folder-link"
              to={`/folder/${folder.id}`}
            >
             {folder.name} 
            </NavLink>
          </li>  
        )}
      </ul>
      <div className="MainSidebar__button-container">
        <button 
          className="MainSidebar__add-folder-button"
          tag={Link}
          to='/add-folder'
          type='button'
        >
          Add Folder
        </button>
      </div>
    </section>
  )
}


export default MainSidebar


