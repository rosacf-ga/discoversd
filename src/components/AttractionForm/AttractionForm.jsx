import { useState } from 'react';
import './AttractionForm.css';

export default function AttractionForm (props){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState ({
    attractionName: '',
    website: '',
    description: ''
  })

  function handleFileInput (e){
    setSelectedFile(e.target.files[0])
  }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }


  function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData()
    formData.append('photo', selectedFile);
    for (let fieldName in state){
      formData.append(fieldName, state[fieldName])
    }
    props.handleAddAttraction(formData);
  }


  return(
    <>
    <h2>Add a New Attraction</h2>
    <div className='addform'>
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>Attraction</label>
        <input
          type="text"
          name="attractionName"
          placeholder="Name of Attraction"
          value={state.attractionName} 
          onChange={handleChange}
          //everytime press a key, it will trigger onChange
        />
        <label>Website</label>
        <input
          type="text"
          name="website"
          placeholder="Website URL"
          value={state.website}
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          type="text"
          name="description"
          placeholder="Short description"
          value={state.description}
          cols="42"
          rows="7"
          onChange={handleChange}></textarea>
        <label>Upload an Image</label>
        <input
          type="file"
          name="photo"
          placeholder="Upload Image"
          onChange={handleFileInput}
        />
        <button type="submit">CREATE</button>
      </form>
      </div>
      </>

  )
}