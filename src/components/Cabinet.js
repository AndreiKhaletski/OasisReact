import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Cabinet.module.css';

const Cabinet = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('Authorization') || sessionStorage.getItem('Authorization');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/cabinet/me', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Ошибка:', error);
        navigate('/login');
      }
    };

    fetchData();
  }, [navigate]);

  const handleLogout = async () => {
    const token = localStorage.getItem('Authorization') || sessionStorage.getItem('Authorization');
    if (token) {
      try {
        await fetch('http://localhost:8080/cabinet/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        localStorage.removeItem('Authorization');
        sessionStorage.removeItem('Authorization');
        navigate('/login');
      } catch (error) {
        console.error('Ошибка выхода:', error);
      }
    }
  };

  const handleChangePassword = () => {
    navigate('/pre-change-password');
  };
  const handleDeleteAccount = () => {
    navigate('/pre-delete-account');
  };

  return (
    <div className={styles.cabinet}>
      <h2 className={styles.header}>Личный Кабинет</h2>
      {user ? (
        <div className={styles.userInfo}>
          <p>Привет, {user.name}!</p>
          {/* Остальная информация о пользователе */}
          <button className={styles.button} onClick={handleChangePassword}>Изменить текущий пароль</button>
          <button className={styles.button} onClick={handleDeleteAccount}>Удалить аккаунт из системы</button>
          <button className={styles.button} onClick={handleLogout}>Выход из аккаунта</button>
        </div>
      ) : (
        <p className={styles.loading}>Загрузка...</p>
      )}
    </div>
  );
};

export default Cabinet;
