import React from 'react';
import Beer from './components/Beer'
import styles from './Results.module.css'; 

function Results({ results }) {
  const beerList = results;
  
  return (
    <div className={styles.searchResults}> 
      { Object.keys(beerList).map(key => 
        <Beer beer={results[key]} key={results[key].id} />
      )}  
    </div>
  )
   
  }
  
  export default Results;
  