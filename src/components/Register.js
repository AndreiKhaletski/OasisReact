import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Register.module.css'; // Импорт CSS Modules
import logoImage from '../assets/logo.png';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
    nickname: '',
    birth_day: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form with data:', formData);
    try {
      const response = await axios.post('http://localhost:8080/cabinet/registration', formData);
      console.log('Server response:', response);
      navigate('/verification');
    } catch (error) {
      console.error('Ошибка при регистрации', error);
    }
  };

  const handleLogoClick1 = () => {
    window.location.href = 'http://localhost:3000';
  };

  return (
    <div className={styles.bodyRegister}>
      <img src={logoImage} alt="Logo Oasis" className={`${styles.logo2} ${styles.logo2}`} onClick={handleLogoClick1} />
      <form className={styles.formRegister} onSubmit={handleSubmit}>
        <h2>Oasis</h2>
        <div className={styles.formGroupRegister}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={styles.inputRegister}/>
        </div>
        <div className={styles.formGroupRegister}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required className={styles.inputRegister} />
        </div>
        <div className={styles.formGroupRegister}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={styles.inputRegister}/>
        </div>
        <div className={styles.formGroupRegister}>
          <label htmlFor="surname">Surname</label>
          <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} required className={styles.inputRegister}/>
        </div>
        <div className={styles.formGroupRegister}>
          <label htmlFor="nickname">Nickname</label>
          <input type="text" id="nickname" name="nickname" value={formData.nickname} onChange={handleChange} required className={styles.inputRegister}/>
        </div>
        <div className={styles.formGroupRegister}>
          <label htmlFor="birth_day">Birth Date</label>
          <input type="date" id="birth_day" name="birth_day" value={formData.birth_day} onChange={handleChange} required className={styles.inputRegister}/>
        </div>
        <button type="submit" className={styles.buttonRegister}>Sign up</button>
      </form>
    </div>
  );
};

export default Register;
