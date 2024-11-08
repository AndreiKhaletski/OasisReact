import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PrePasswordReset.module.css';

const PrePasswordReset = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Email:', email);
      const response = await fetch(`http://localhost:8080/cabinet/pre-password-reset?email=${encodeURIComponent(email)}`, {
        method: 'POST'
      });

      console.log('Response:', response);

      if (response.ok) {
        console.log('Email sent successfully');
        navigate('/password-reset');
      } else {
        console.error('Ошибка при отправке email');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="email" className={styles.label}>Введите ваш email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Отправить</button>
      </form>
    </div>
  );
};

export default PrePasswordReset;
