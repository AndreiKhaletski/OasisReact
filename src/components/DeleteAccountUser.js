import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteAccountUser = () => {
  const navigate = useNavigate();
  const [codeDeleteAccount, setCodeDeleteAccount] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/cabinet/delete-me-account?codeDeleteAccount=${codeDeleteAccount}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${localStorage.getItem('Authorization') || sessionStorage.getItem('Authorization')}`
        }
      });
      if (response.ok) {
        alert('Аккаунт успешно удален!');
        navigate('/');
      } else {
        const data = await response.json();
        setError(data.message || 'Ошибка удаления аккаунта!');
      }
    } catch (error) {
      setError('Ошибка: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Удаление аккаунта</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="codeDeleteAccount">Код отправленный на почту</label>
          <input
            type="text"
            id="codeDeleteAccount"
            value={codeDeleteAccount}
            onChange={(e) => setCodeDeleteAccount(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Удалить аккаунт</button>
      </form>
    </div>
  );
};

export default DeleteAccountUser;
