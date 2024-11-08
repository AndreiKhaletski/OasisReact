import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Verification.module.css';
import logoImage from '../assets/logo.png';

const Verification = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const queryParams = `email=${encodeURIComponent(email)}&code=${encodeURIComponent(code)}`;
    try {
      await axios.get(`http://localhost:8080/cabinet/verification?${queryParams}`);
      alert('Верификация прошла успешно!');
      navigate('/login');
    } catch (error) {
      alert(`Ошибка верификации: ${error.response.data}`);
    }
  };

  const handleLogoClick3 = () => {
    window.location.href = 'http://localhost:3000';
  };

  return (
    <div className={styles.bodyVerification}>
      <img src={logoImage} alt="Logo Oasis" className={`${styles.logoVerification} ${styles.logoHover}`} onClick={handleLogoClick3} />
      <form className={styles.formVerification} onSubmit={handleSubmit}>
        <h4>Oasis</h4>
        <div>
          <label htmlFor="email" className={styles.labelVerification}>Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.inputVerification}
          />
        </div>
        <div>
          <label htmlFor="code" className={styles.labelVerification}>Your code</label>
          <input
            type="text"
            id="code"
            name="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
            className={styles.inputVerification}
          />
        </div>
        <button type="submit" className={styles.buttonVerification}>Activate</button>
      </form>
    </div>
  );
};

export default Verification;
