import React, { useState } from 'react';
import styles from './Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h1>歡迎回來</h1>
        <div>
          <label htmlFor="username" className={styles.label}>帳戶</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='請輸入帳戶'
            required
          />
        </div>
        <div className={styles.passwordContainer}>
          <label htmlFor="password" className={styles.label}>密碼</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='請輸入密碼'
            required
          />
          <button
            type="button"
            className={styles.togglePasswordButton}
            onClick={togglePasswordVisibility}
          >
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
          </button>
        </div>
        <button className={styles.loginButton} type="submit">登 入</button>
      </form>
    </div>
  );
};

export default Login;