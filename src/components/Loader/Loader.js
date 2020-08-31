import React from 'react';
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={faBeer} />
      </div>
      <div className={styles.loaderText}>Loading...</div>
    </div>
  );
}

export default Loader;
