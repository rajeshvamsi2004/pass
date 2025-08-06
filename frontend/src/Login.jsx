import React, { useState } from 'react';
import axios from 'axios';
const cors = require('cors');
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://pass-3.onrender.com/api/login', {
        username,
        password,
      });
      setMessage(res.data.message);
    } catch (error) {
      setMessage('Error occurred');
      console.error(error);
    }
  };

  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
