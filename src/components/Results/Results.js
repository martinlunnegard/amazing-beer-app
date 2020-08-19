import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Results.module.css'; 

function Results({ results }) {
  const dispatch = useDispatch();
  const beerList = Object.keys(results);

  const handleClick = (obj) => {
    console.log(obj, 'incoming'); 
    dispatch({ type: 'ADD_FAVORITE', payload: obj }); 
  }
   
  return (
    <div className={styles.searchResults}> 
      { beerList.map(key => 
        <div className={styles.beerContainer} key={key}> 
          <div className={styles.beerInfoContainer}>
            <div className={styles.beerName}>{ results[key].name }</div>
            <p className={styles.beerTagline}>{ results[key].tagline }</p>
            <p className={styles.beerDescription}>{ results[key].description }</p>
            <button onClick={() => handleClick(results[key].name)}>Add to favorites</button>
          </div>	
          <div className={styles.beerImgWrapper}>
            <img alt={ results[key].name } src={ results[key].image_url } />
          </div>
        </div>
      )}  
    </div>
  )
   
  }
  
  export default Results;
  