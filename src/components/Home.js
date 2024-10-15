import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles1 from './Home.module.css'; // Использование CSS Module
import logoImage from '../assets/logo.png';

const Home = () => {
  useEffect(() => {
    const logo = document.getElementById('logo');
    const oasisTextHome = document.getElementById('oasisTextHome');
    setTimeout(() => {
      logo.classList.add(styles1.bounceIn); // Добавление класса с анимацией
      setTimeout(() => {
        oasisTextHome.style.display = 'block';
        oasisTextHome.style.animation = 'fadeIn 1s ease forwards';
      }, 500); // время совпадает с задержкой в CSS
    }, 10); // задержка появления логотипа
  }, []);

  return (
    <div>
      <div className={styles1.dynamicText}>
        <h1 id="oasisTextHome" className={styles1.oasisTextHome}>Oasis</h1>
        <img src={logoImage} alt="Logo Oasis" className={`${styles1.logoHome}`} id="logo"/>
      </div>
      <div className={styles1.buttonGroupHome}>
        <Link to="/login">
          <button className={styles1.buttonHome1}>Log in</button>
        </Link>
        <Link to="/register">
          <button className={styles1.buttonHome2}>Sign up</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
