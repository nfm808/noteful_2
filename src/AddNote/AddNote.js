import React, { Component } from 'react'
import NotesContext from '../notesContext';

class AddNote extends Component {
  static contextType = NotesContext;
  constructor(props) {
    super(props)
  
    this.state = {
       name: '',
       folderId: '',
       content: '',
       nameValid: false,
       folderValid: false,
       contentValid: false,
       formValid: false,
       validationMessages: {
         name: '',
         folder: '',
         content: '',
       }
    };
  }

  updateName(name) {
    this.setState({
      name: name,
    })
  }

  updateFolder(folder) {
    this.setState({
      folderId: folder,
    })
  }

  updateContent(content) {
    this.setState({
      content: content,
    })
  }
  
  render() {
    const { folders } = this.context;
    const folderOptions = !folders ? null 
                          :folders.map(folder => 
                          <option key={folder.id} value={folder.id}>{folder.name}</option>
                          );

    return (
      <form className="form">
        <h2>Add Note</h2>
        <h3>* fields required</h3>
        <div className='form-group'>
          <label htmlFor='name'>* Name: </label>
          <input type='text' name='name' id='name' onChange={(e) => this.updateName(e.target.value)}/>
          <label htmlFor='folder'>* Folder: </label>
          <select name='folder' id='folder' onChange={(e) => this.updateFolder(e.target.value)}>
            {folderOptions}
          </select>
          <label htmlFor='content'>* Content: </label>
          <textarea type="text" rows='5' name='content' id='content' onChange={(e) => this.updateContent(e.target.value)} />
        </div>
        <button type='button' onClick={() => this.props.history.goBack()} >Cancel</button>
        <button type='submit' disabled={!this.state.formValid}>Submit</button>
      </form>
    )
  }
}

export default AddNote
