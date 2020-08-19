import React, { Component } from 'react';
import styles from './Header.module.css'

class Header extends Component {

    render() {
      return (
       <nav>
         <a href="/">
           LOGO
         </a>
          <ul>
            <li>My favorites</li>
            <li>About Beer</li>
          </ul>
       </nav>
       
      );
  
    }
   
  }
  
  export default Header;
  