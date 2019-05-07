import React from 'react'
import './Header.css'

export default function Header(props) {
  return (
    <header className="App__header">
      <h1>{props.title}</h1>
    </header>
  )
}
