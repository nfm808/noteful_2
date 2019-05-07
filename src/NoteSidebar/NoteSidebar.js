import React from 'react'

function NoteSidebar(props) {
  return (
    <section className='MainSidebar'>
      <p>{props.folder.name}</p>
    </section>  
  )
}


export default NoteSidebar

