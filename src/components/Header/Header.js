import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css'

const Header = () => {
    return (
      <nav className={styles.pageNav}>
        <div className={styles.navFlex}>
        <Link to="/">
          LOGO
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
  