import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import DATA from './dummy-store'
import MainSidebar from './MainSidebar/MainSidebar'
import NoteSidebar from './NoteSidebar/NoteSidebar'
import MainMain from './MainMain/MainMain'
import NoteMain from './NoteMain/NoteMain'

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       notes: [],
       folders: [],
       err: null
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(DATA)
    }, 600);
  }

  findNote(notes, noteId) {
    console.log( 'noteId variable:', noteId)
    return (!noteId) ?  notes 
          : notes.filter(note => note.id === noteId )[0];
  }

  findFolder(folders, folderId) {
    console.log(folderId)
    return (!folderId) ? folders  
          : folders.filter(folder => folder.id === folderId)[0];
  }

  
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
            const note = this.findNote(notes, noteId) || {}
            const folder = this.findFolder(folders, note.folderId)
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

  getNotesForFolder(notes, folderId) {
    return (!folderId) ? notes
      : notes.filter(note => note.folderId === folderId);
  }


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
              const notesForFolder = this.getNotesForFolder(notes, folderId)
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
            const note = this.findNote(notes, noteId)
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