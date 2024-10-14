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

    return (
        <div className={styles.dynamicText2}>
            <img src={logoImage} alt="Logo Oasis" className={styles.logo2} />
            <form id="registrationForm" className={styles.form} onSubmit={handleSubmit}>
                <h2>Oasis</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="surname">Surname</label>
                    <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="nickname">Nickname</label>
                    <input type="text" id="nickname" name="nickname" value={formData.nickname} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="birth_day">Birth Date</label>
                    <input type="date" id="birth_day" name="birth_day" value={formData.birth_day} onChange={handleChange} required />
                </div>
                <button type="submit" className={styles.verificationButton}>Sign up</button>
            </form>
        </div>
    );
};

export default Register;
