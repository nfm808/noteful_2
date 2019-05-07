import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
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
        <Header title='Noteful' />
      </div>
    )
  }

}

export default App