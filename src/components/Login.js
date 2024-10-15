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
    <div className={styles.bodyLogin}>
      <img src={logoImage} alt="Logo Oasis" className={styles.logoLogin} />
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <h3>Oasis</h3>
        <div className={styles.formDivLogin}>
          <label htmlFor="email" className={styles.labelLogin}>Your email</label>
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
        <div className={styles.formDivLogin}>
          <label htmlFor="password" className={styles.labelLogin}>Your password</label>
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
        <div className={styles.formDivLogin}>
          <label htmlFor="rememberMe" className={styles.rememberMeLabelLogin}>Remember me</label>
          <label className={styles.switchLogin}>
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className={styles.sliderLogin}></span>
          </label>
        </div>
        <button type="submit" className={styles.buttonLogin}>Log in</button>
      </form>
    </div>
  );
};

export default Login;
