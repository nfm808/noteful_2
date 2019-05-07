import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Header from './Header'

describe('Header component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header title='Noteful' />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})
