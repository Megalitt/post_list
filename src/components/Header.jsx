import React from 'react';
import styles from '../styles/Header.module.css';
import { Link } from 'react-router-dom';
import Menu from './Menu';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.link}>Главная</Link>
      <Menu/>
    </div>
  );
};

export default Header;