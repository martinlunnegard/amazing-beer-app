import React from 'react';
import { Link } from 'react-router-dom';
import { faBeer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Header.module.css'

const Header = () => {
    return (
      <nav className={styles.pageNav}>
        <div className={styles.navFlex}>
        <Link to="/">
          <li className={styles.siteLogo}><FontAwesomeIcon icon={faBeer} /></li>
        </Link>
          <ul className={styles.navLinks}>
            <Link style={{ textDecoration: 'none' }} to="/favorites">
              <li>My favorites</li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/about">
              <li>About</li>
            </Link>  
          </ul>
        </div>
      </nav>
      );
    }

  export default Header;
  