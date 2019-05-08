import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import DATA from './dummy-store'
import MainSidebar from './MainSidebar/MainSidebar'
import NoteSidebar from './NoteSidebar/NoteSidebar'
import MainMain from './MainMain/MainMain'
import NoteMain from './NoteMain/NoteMain'
import { getNotesForFolder, findNote, findFolder } from './notes-helpers'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       notes: [],
       folders: [],
       err: null
    }
  }

  // fake api call for the dummy store
  componentDidMount() {
    setTimeout(() => {
      this.setState(DATA)
    }, 600);
  }

  // maps over the sidebar routes to render the routes
  // without having to type each out concise, less verbose
  renderSidebarRoutes() {
    const { notes, folders } = this.state
    return (
      <>
        {['/', '/folder/:folderId'].map(path => 
          <Route  
            exact
            key={path}
            path={path}
            render={routeProps =>
              <MainSidebar
                folders={folders}
                notes={notes}
                {...routeProps}
              />
            }
          />
        )}
        <Route 
          path='/note/:noteId'
          render={routeProps => { 
            const { noteId } = routeProps.match.params
            const note = findNote(notes, noteId) || {}
            const folder = findFolder(folders, note.folderId)
            console.log('folder function resultes:', folder)
            return (
              <NoteSidebar 
                {...routeProps}
                folder={folder}
                note={note}
              />
            )
          }}
        />
      </>
    )
  }

  // map across the different routes to create the routes
  // without having to list them each in the render
  renderMainRoutes() {
    const { notes, folders } = this.state
    return (
      <>
        {['/', '/folder/:folderId'].map(path =>
          <Route 
            exact
            key={path}
            path={path}
            render={routeProps => {
              const { folderId } = routeProps.match.params
              const notesForFolder = getNotesForFolder(notes, folderId)
              return (
                <MainMain
                  {...routeProps}
                  notes={notesForFolder}
                />
              )
            }}
          />
        )}
        <Route 
          path='/note/:noteId'
          render={routeProps => {
            const { noteId } = routeProps.match.params
            const note = findNote(notes, noteId)
            return (
              <NoteMain 
                {...routeProps}
                note={note}
              />
            )
          }}
        />
      </>
    )
  }

  render() {

    return (
      <div className="App">
        <header className="App__header">
          <h1><Link to="/">Noteful</Link></h1>
        </header>
        <section className="App__main">
          {this.renderSidebarRoutes()}
          {this.renderMainRoutes()}
        </section>
      </div>
    )
  }

}

export default App