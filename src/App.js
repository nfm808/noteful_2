import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import DATA from './dummy-store'

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
      this.setState({
        folders: DATA.folders,
        notes: DATA.notes
      })
    }, 600);
  }
  
  render() {

    return (
      <div className="App">
        <header className="App__header">
          <h1><Link to="/">Noteful</Link></h1>
        </header>
      </div>
    )
  }

}

export default App