import React from 'react';
import styles from '../styles/AboutMe.module.css';
import Srd from '../image/photo_2023-02-06_18-19-00.jpg';


const AboutMe = () => {
  return (
    <div className={styles.about}>
      <div className={styles.text}>
        <p><img src={Srd}/><span>Андрей, 41 год<br/></span><br/>
        Быстро учусь, не боюсь сложных задач.
        Легко осваиваю новые технологии.<br/><br/>
        <span>Основные технологии:</span> React, HTML5, CSS3, JavaScript, TypeScript.<br/><br/>
        <span>Технологии:</span> Figma, Flex, Grid, GitHup, БЭМ, SASS, SCSS, jQuery, Materialize, canvas.
        В рамках учебного курса знаком с postgreSQL и PHP.
        React, Хуки и сопутствующие технологии (Redux и др.).<br/><br/>
        <span>Основные навыки:</span> адаптивная/отзывчивая, кроссбраузерная верстка сайта из Figma(Pixso). Pixel Perfect верстка. Анимации на js, css, jQuery. Работа с DOM на JS. Активное использование плагина Emmet.<br/><br/>
        <span>Примеры работ:</span><br/>
        <a href="https://getterfoll.ru/" alt="none">https://getterfoll.ru/</a><br/>
        <a href="http://sdf.getterfoll.ru/" alt="none">http://sdf.getterfoll.ru/</a><br/><br/>
        <span>GitHub: </span><a href='https://github.com/Megalitt?tab=repositories' alt="none">https://github.com/Megalitt?tab=repositories</a> <br/><br/>
        В последние годы работал по другой специальности.
        Имею опыт и знания в электротехнике.<br/><br/>
        <span>Хобби:</span> ламповая техника, ламповые усилители, часы на неоновых индикаторах. В рамках хобби немного программировал PIC микроконтроллеры на ассемблере.<br/><br/>
        <span>Высшее образование - </span>
        Вятский государственный университет, Киров (Кировская область)
        Электротехнический факультет, Электрические станции</p>
      </div>
    </div>
  );
};

export default AboutMe;