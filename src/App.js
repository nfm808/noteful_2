import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import DATA from './dummy-store'
import MainSidebar from './MainSidebar/MainSidebar'
import MainMain from './MainMain/MainMain'

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
        {/* <Route 
          path='/note/:noteId'
          render={routeProps => { 
            const { noteId } = routeProps.match.params
            const note = this.findNote(notes, noteId) || {}
            const folder = this.findFolder(folders, note.folderId)
            return (
              <NoteSidebar 
                {...routeProps}
                folder={folder}
              />
            )
          }}
        /> */}
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
              <MainMain 
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