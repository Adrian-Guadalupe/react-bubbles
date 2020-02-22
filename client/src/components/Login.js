import React, { useState } from "react";
import axios from "axios";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
 })

  const handleSubmit = e => {
    e.preventDefault()

    axios
      .post('http://localhost:5000/api/login', credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.payload)
        setCredentials({
          username: '',
          password: ''
       })
        props.history.push('/bubbles')

      })
      .catch(err => {
        console.log('error', err)
        setCredentials({
          username: '',
          password: ''
       })
      })

    
  }

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
         <input
            type='text'
            name='username'
            placeholder='Username'
            value={credentials.username}
            onChange={handleChange}
         />
         <input
            type='password'
            name='password'
            placeholder='Password'
            value={credentials.password}
            onChange={handleChange}
         />
         <button>Submit</button>
      </form>
    </>
  );
};

export default Login;
