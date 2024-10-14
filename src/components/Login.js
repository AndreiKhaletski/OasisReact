import React, { useState } from 'react';
import styles from './Login.module.css';
import logoImage from '../assets/logo.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/cabinet/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const authHeader = response.headers.get('Authorization');

        if (authHeader) {
          const tokenWithBearer = authHeader;
          if (rememberMe) {
            localStorage.setItem('Authorization', tokenWithBearer);
          } else {
            sessionStorage.setItem('Authorization', tokenWithBearer);
          }
          window.location.href = '/cabinet';
        } else {
          //Перенаправляем пользователя на localhost:3000/cabinet
          alert('Токен не найден в заголовке ответа');
        }
      } else {
        console.error('Ошибка входа');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div id={styles.dynamicText}>
      <img src={logoImage} alt="Logo Oasis" className={styles.logo} />
      <form id={styles.loginForm} onSubmit={handleSubmit}>
        <h3>Oasis</h3>
        <div>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="password">Your password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="rememberMe" className={styles.rememberMeLabel}>Remember me</label>
          <label className={styles.switch}>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className={styles.slider}></span>
          </label>
        </div>
        <button type="submit" className={styles.button}>Log in</button>
      </form>
    </div>
  );
};

export default Login;
