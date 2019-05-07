import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  return (
    <header className="App__header">
      <h1><Link to="/">{props.title}</Link></h1>
    </header>
  )
}
