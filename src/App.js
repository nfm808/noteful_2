import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import NotesContext from './notesContext'
import MainSidebar from './MainSidebar/MainSidebar'
import NoteSidebar from './NoteSidebar/NoteSidebar'
import MainMain from './MainMain/MainMain'
import NoteMain from './NoteMain/NoteMain'
import { getNotesForFolder, findNote, findFolder } from './notes-helpers'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       notes: null,
       folders: null,
       err: null
    }
  }

  // api call for the json server
  componentDidMount() {
    const notes = fetch('http://localhost:9090/notes');
    const folders = fetch('http://localhost:9090/folders');
    Promise.all([notes, folders])
      .then(([notesResponse, foldersResponse]) => {
        if(!notesResponse.ok || !foldersResponse.ok) {
          throw new Error('Something went wrong');
        }
        return Promise.all([notesResponse.json(), foldersResponse.json()])
      })
      .then(([notesData, foldersData]) => {
        this.setState({
          notes: notesData,
          folders: foldersData
        })
      })
      .catch(error => {
        this.setState({
          err: error.message
        })
      })
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
            component={MainSidebar}
            // render={routeProps =>
            //   <MainSidebar
            //     folders={folders}
            //     notes={notes}
            //     {...routeProps}
            //   />
            // }
          />
        )}
        <Route 
          path='/note/:noteId'
          component={NoteSidebar}
          // render={routeProps => { 
          //   const { noteId } = routeProps.match.params
          //   const note = findNote(notes, noteId) || {}
          //   const folder = findFolder(folders, note.folderId)
          //   console.log('folder function resultes:', folder)
          //   return (
          //     <NoteSidebar 
          //       {...routeProps}
          //       folder={folder}
          //       note={note}
          //     />
          //   )
          // }}
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
            component={MainMain}
            // render={routeProps => {
            //   const { folderId } = routeProps.match.params
            //   const notesForFolder = getNotesForFolder(notes, folderId)
            //   return (
            //     <MainMain
            //       {...routeProps}
            //       notes={notesForFolder}
            //     />
            //   )
            // }}
          />
        )}
        <Route 
          path='/note/:noteId'
          component={NoteMain}
          // render={routeProps => {
          //   const { noteId } = routeProps.match.params
          //   const note = findNote(notes, noteId)
          //   return (
          //     <NoteMain 
          //       {...routeProps}
          //       note={note}
          //     />
          //   )
          // }}
        />
      </>
    )
  }

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      addNote: this.addNote,
      addFolder: this.addFolder,
      deleteFolder: this.deleteFolder,
      deleteNote: this.deleteNote
    }
    return (
      <NotesContext.Provider value={contextValue}>
        <div className="App">
          <header className="App__header">
            <h1><Link to="/">Noteful</Link></h1>
          </header>
          <section className="App__main">
            {this.renderSidebarRoutes()}
            {this.renderMainRoutes()}
          </section>
        </div>
      </NotesContext.Provider>
    )
  }

}

export default App