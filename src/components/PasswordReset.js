import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './PasswordReset.module.css';

const PasswordReset = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const { uuid } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/cabinet/password-reset/${uuid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ codeResetPassword: code, newPassword: newPassword })
      });

      if (response.ok) {
        console.log('Пароль успешно сброшен');
        navigate('/login');
      } else {
        console.error('Ошибка при сбросе пароля');
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="code" className={styles.label}>Введите код</label>
        <input
          type="text"
          id="code"
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
          className={styles.input}
        />
        <label htmlFor="newPassword" className={styles.label}>Введите новый пароль</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>Сбросить пароль</button>
      </form>
    </div>
  );
};

export default PasswordReset;
