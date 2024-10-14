import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Verification.module.css';
import logoImage from '../assets/logo.png';

const Verification = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const queryParams = `email=${encodeURIComponent(email)}&code=${encodeURIComponent(code)}`;
        try {
            await axios.get(`http://localhost:8080/cabinet/verification?${queryParams}`);
            alert('Верификация прошла успешно!');
            navigate('/login');
        } catch (error) {
            alert(`Ошибка верификации: ${error.response.data}`);
        }
        
    };

    return (
        <div id={styles.dynamicText3}>
            <img src={logoImage} alt="Logo Oasis" className={styles.logo3} />
            <form id={styles.verificationForm} onSubmit={handleSubmit}>
                <h3>Oasis</h3>
                <div>
                    <label htmlFor="email">Your email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>
                <div>
                    <label htmlFor="code">Your code</label>
                    <input
                        type="text"
                        id="code"
                        name="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        required
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.button}>Activate</button>
            </form>
        </div>
    );
};

export default Verification;
