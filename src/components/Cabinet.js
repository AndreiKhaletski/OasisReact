import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cabinet = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('Authorization') || sessionStorage.getItem('Authorization');
    if (!token) {
      navigate('/login');
      return;
    }

    // Запрос на сервер для проверки токена и получения информации о пользователе
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

  return (
    <div>
      <h2>Личный Кабинет</h2>
      {user ? (
        <div>
          <p>Привет, {user.name}!</p>
          {/* Остальная информация о пользователе */}
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </div>
  );
};

export default Cabinet;
