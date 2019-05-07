import React from 'react';
import { Route } from 'react-router-dom';
import Header from './Header/Header';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
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