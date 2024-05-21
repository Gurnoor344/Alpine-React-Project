import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Example: Password must be at least 8 characters long
    return password.length >= 8;
  };

  const handleUsernameChange = (e) => {
    const email = e.target.value;
    setUsername(email);
    if (!validateEmail(email)) {
      setUsernameError('Please enter a valid email address.');
    } else {
      setUsernameError('');
    }
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    if (!validatePassword(pwd)) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(username) && validatePassword(password)) {
      // Handle form submission
      console.log('Form submitted with:', { username, password });
    } else {
      console.log('Form has errors.');
    }
  };

  const handleSign = (e) => {
    e.preventDefault();
    if (username === '' && password === '') {
      alert('Please fill the form');
      return;
    }
    localStorage.setItem('logged', true);
    alert("login successfull");
    navigate("/");
    window.location.reload();
  }

  return (
    <div className='login-body'>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <h3>Login Here</h3>

          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            placeholder="Email or Phone" 
            id="username" 
            value={username}
            onChange={handleUsernameChange}
            required 
          />
          {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}

          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            placeholder="Password" 
            id="password" 
            value={password}
            onChange={handlePasswordChange}
            required 
          />
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}

          <button type="submit" onClick={(e) => {handleSign(e)}}>Log In</button>
          <a href="create.html" style={{color: "white"}} className="navbar-link" data-nav-link>Create account </a>
        </form>
      </div>
    </div>
  );
}

export default SignUp;