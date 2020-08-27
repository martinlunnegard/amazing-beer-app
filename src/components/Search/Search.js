import React, { useState } from 'react'
import styles from './Search.module.css'

const Search = props => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    props.performSearch(searchTerm); 
    e.currentTarget.reset(); 
  }

    return (
    <div className={styles.container}>
      <form className="beer-search-form" onSubmit={handleSubmit}> 
        <input 
          type="text" 
          className="search-input" 
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          type="submit" 
          className="submit-btn"
        >
          Find my beer
        </button>
      </form>
      </div>
    );

  }
   

  
  export default Search;
  