import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PreChangePassword.module.css';

const PreChangePassword = () => {
  const navigate = useNavigate();

  const sendPostRequest = async () => {
    try {
      const response = await fetch('http://localhost:8080/cabinet/pre-change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('Authorization') || sessionStorage.getItem('Authorization')}`
        },
        body: JSON.stringify({ /* Здесь можно передать данные */ }),
      });

      if (response.ok) {
        navigate('/change-password');
      } else {
        console.error('Ошибка при отправке POST-запроса');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles.container}>
      <p className={styles.text}>На вашу почту будет отправлен код для подтверждения.</p>
      <button onClick={sendPostRequest} className={styles.button}>
        Изменить пароль
      </button>
    </div>
  );
};

export default PreChangePassword;
