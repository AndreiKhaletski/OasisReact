import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreDeleteAccountUser = () => {
  const navigate = useNavigate();

  const sendPostRequest = async () => {
    try {
      const response = await fetch('http://localhost:8080/cabinet/pre-delete-me-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('Authorization') || sessionStorage.getItem('Authorization')}`
        },
        body: JSON.stringify({ /* Здесь можно передать данные */ }),
      });

      if (response.ok) {
        navigate('/delete-me-account');
      } else {
        console.error('Ошибка при отправке POST-запроса');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button onClick={sendPostRequest}>Отправить POST-запрос и перенаправление на удаление аккаунта</button>
  );
};

export default PreDeleteAccountUser;
