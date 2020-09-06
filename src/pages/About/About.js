import React from 'react';
import profile from '../../assets/martin-brewdog.jpg'
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.aboutHeader}>About</h2>
      <div className={styles.aboutFlex}>
        <div className={styles.aboutInnerFlex}>
          <div className={styles.aboutInfo}>This masterpiece of an app was made by Martin Lunnegård using React + Redux and Brewdog's Punk API. It's creator possess great knowledge of Front End development as well as vast experience with Brewdog's line of products. As we say in Swedish 'Skål!'</div>
          <a className={styles.aboutLink} target="_blank" rel="noopener noreferrer" href="https://martinlunnegard.se">Check out my other stuff!</a>
        </div>
        <img src={profile} alt="Martin Brewdog" className={styles.profileImg} />
      </div>
    </div>
  );
}

export default About;
