import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddFolder extends Component {

  render() {
    return (
      <form className="addFolder">
        <h2>Add Folder</h2>
        <div className="form-group">
          <label htmlFor='name'>Name *</label>
          <input type="text" className="addFolder_name"
            name='name' id='name'/>
        </div>
        <button type='submit' className="addFolder_submit">
          Add
        </button>
      </form>
    )
  }
}
