import React, { useState } from 'react';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Search.module.css';

const Search = props => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    if(!searchTerm) return
    props.performSearch(searchTerm); 
    setSearchTerm('');
    e.currentTarget.reset(); 
  }

    return (
    <div className={styles.container}>
      <form className={styles.beerSearchForm} onSubmit={handleSubmit}> 
        <input 
          type="text" 
          className={styles.searchInput}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          type="submit" 
          className={styles.submitBtn}
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
      </div>
    );

  }
   

  
  export default Search;
  