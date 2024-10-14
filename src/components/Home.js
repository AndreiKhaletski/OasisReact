import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'; // Использование CSS Module
import logoImage from '../assets/logo.png';

const Home = () => {
  useEffect(() => {
    const logo = document.getElementById('logo');
    const oasisText = document.getElementById('oasisText');
    setTimeout(() => {
      logo.classList.add(styles.bounceIn); // Добавление класса с анимацией
      setTimeout(() => {
        oasisText.style.display = 'block';
        oasisText.style.animation = 'fadeIn 1s ease forwards';
      }, 500); // время совпадает с задержкой в CSS
    }, 10); // задержка появления логотипа
  }, []);

  return (
    <div>
      <div className={styles.dynamicText}>
        <h1 id="oasisText" className={styles.oasisText}>Oasis</h1>
        <img src={logoImage} alt="Logo Oasis" className={`${styles.logo}`} id="logo"/>
      </div>
      <div className={styles.buttonGroup}>
        <Link to="/login">
          <button className={styles.loginButton}>Log in</button>
        </Link>
        <Link to="/register">
          <button className={styles.registerButton}>Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
