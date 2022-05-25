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
      await userService.signup(formData) // <- we must pass the argument as formData when we have a photo
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
    <Title />
    <h2>Sign Up</h2>
    <div className='addform'>
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>Username</label>
        <input
          type="text"
          name="username"
          value={state.username} 
          onChange={handleChange}
          //everytime press a key, it will trigger onChange
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="passwordConf"
          value={state.passwordConf}
          onChange={handleChange}
        />
        <label>Upload a Profile Photo</label>
        <input
          type="file"
          name="photo"
          placeholder="Upload Image"
          onChange={handleFileInput}
        />
        <button type="submit">SIGN UP</button>
      </form>
      </div>
      <div className='alt-link'>Already have an account? <Link to="/login" className='logsign-link'>Log In</Link></div>
      </div>
      </>
  );
}
