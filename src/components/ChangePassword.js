import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [codeToChangePassword, setCodeToChangePassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setError('Новый пароль и подтверждение не совпадают');
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/cabinet/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('Authorization') || sessionStorage.getItem('Authorization')}`
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
          confirmNewPassword,
          codeToChangePassword
        })
      });

      if (response.ok) {
        alert('Пароль успешно изменен');
        navigate('/cabinet');
      } else {
        const data = await response.json();
        setError(data.message || 'Ошибка изменения пароля');
      }
    } catch (error) {
      setError('Ошибка: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Изменение пароля</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="currentPassword">Текущий пароль</label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="newPassword">Новый пароль</label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmNewPassword">Повторите новый пароль</label>
          <input
            type="password"
            id="confirmNewPassword"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="codeToChangePassword">Код отправленный на почту</label>
          <input
            type="password"
            id="codeToChangePassword"
            value={codeToChangePassword}
            onChange={(e) => setCodeToChangePassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Изменить пароль</button>
      </form>
    </div>
  );
};

export default ChangePassword;
