import { useState } from 'react';
import NavBar from '../../components/Header/Header';
import { Button, Form, Header, Grid, Segment } from 'semantic-ui-react';

export default function AttractionFormPage ({user, handleLogout}){
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
  }


  return(
    <>
    <NavBar handleLogout={handleLogout} user={user}/>
    <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">Add a New Attraction</Header>
        <Segment>
            <Form  autoComplete="off" onSubmit={handleSubmit}>
              <Form.Input
                  className="form-control"
                  name="attractionName"
                  value={state.attractionName}
                  placeholder="Name of Attraction"
                  onChange={handleChange}
                  required
              />   
              <Form.Input
                  className="form-control"
                  name="website"
                  value={state.website}
                  placeholder="Website URL"
                  onChange={handleChange}
                  required
              />  
              <Form.TextArea
                  className="form-control"
                  name="description"
                  value={state.description}
                  placeholder="Short Description"
                  onChange={handleChange}
                  required
              />  
              <Form.Input
                className="form-control"
                type="file"
                name="photo"
                placeholder="Upload Image"
                onChange={handleFileInput}
              />   
              <Button
                type="submit"
                className="btn"
              >
                ADD ATTRACTION
              </Button>
            </Form>
          </Segment>
      </Grid.Column>
    </Grid>
    </>
  )
}