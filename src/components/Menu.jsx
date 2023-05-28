import React, { useState } from 'react';
import Srd from '../image/photo_2023-02-06_18-19-00.jpg';
import styles from '../styles/Menu.module.css';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className={styles.menu}>
      <div className={styles.burger} onClick={() => setMenu(!menu)}>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
        <div className={styles.item}></div>
      </div>
        <div className={menu ? `${styles.activ} ${styles.nav}` : styles.nav}>
          <Link to="/user" className={styles.link}>Список постов</Link>
          <Link to="/about" className={styles.link}>Обо мне</Link>
          <div className={styles.line}></div>
          <div className={styles.user}>
            <img src={Srd}/>
            <span>Андрей</span>
            <a href='megalit81@bk.ru'>megalit81@bk.ru</a>
          </div>
        </div>
    </div>
  );
};

export default Menu;