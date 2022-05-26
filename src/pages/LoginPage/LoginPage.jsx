import React, { useState } from "react";
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import Title from '../../components/Title/Title';

export default function LoginPage(props) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      props.handleSignUpOrLogin();
      navigate("/attractions");
    } catch (err) {
      // Invalid user data (probably duplicate email)
      setError(err.message);
    }
  }

  return (
    <>
      <div className="signup">
      <Title />
      <h2>Log In</h2>
    <div className='addform'>
    <form autoComplete="off" onSubmit={handleSubmit}>
      <label>Username</label>
        <input
          type="text"
          name="username"
          value={state.username} 
          onChange={handleChange} //everytime press a key, it will trigger onChange
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button type="submit">LOG IN</button>
        </form>
        </div>
        <div className='alt-link'>New to us? <Link to="/signup" className='logsign-link'>Sign Up</Link></div>
        </div>
        </>
  );
}
