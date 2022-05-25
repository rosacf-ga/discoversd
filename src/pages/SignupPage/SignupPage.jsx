import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { Button, Form, Message, Grid, Header, Image, Segment } from 'semantic-ui-react'
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import Title from '../../components/Title/Title';
import './SignupPage.css';

export default function SignUpPage(props) {

  const navigate = useNavigate()

  const [error, setError] = useState('')
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
    passwordConf: ''
  })

  const [selectedFile, setSelectedFile] = useState('');

  async function handleSubmit(e){
    e.preventDefault()
    const formData = new FormData(); // new FormData is from the browser
    formData.append('photo', selectedFile);
    for (let fieldName in state){
      formData.append(fieldName, state[fieldName])
    }
    try {
      await userService.signup(formData) // <- we must pass the argument as formData when we have a
      // photo
      props.handleSignUpOrLogin(); // <- this will decode the token from local storage
      navigate('/attractions')
    } catch(err){
      console.log(err.message);
      setError(err.message)
    }
  }

  function handleChange(e){
    setState({
      ...state, 
      [e.target.name]: e.target.value
    })
  }

  function handleFileInput(e){
    console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  }


  return (
    <>
    <div className="signup">
    <Title/>
    </div>
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          Sign Up
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <Form.Input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <Form.Input
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />
            </Form.Field>
            <Button 
                color="teal"
                fluid
                size="large"
                type="submit"
                className="btn">
                Sign Up
            </Button>
          </Segment>
          </Form>
          <Message>
            Already have an account? <Link to="/login">Log In</Link>
          </Message>
        {error ? <ErrorMessage error={error} /> : null}
      </Grid.Column>
    </Grid>
    </>
  );
}
