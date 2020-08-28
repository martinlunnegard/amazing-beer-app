import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Results.module.css'; 

function Results({ results }) {
  const dispatch = useDispatch();
  const beerList = Object.keys(results);
  const [showFood, setShowFood] = useState(false);

  const handleClick = (obj) => {
    console.log(obj, 'incoming'); 
    dispatch({ type: 'ADD_FAVORITE', payload: obj }); 
  }

  const showFoodPair = (e) => {
    setShowFood(!showFood);
  }
   
  return (
    <div className={styles.searchResults}> 
      { beerList.map(key => 
        <div className={styles.beerContainer} key={key}> 
          <div className={styles.beerInfoContainer}>
            <div className={styles.beerName}>{ results[key].name }</div>
            <p className={styles.beerTagline}>{ results[key].tagline }</p>
            <p className={styles.beerDescription}>{ results[key].description }</p>
            <button className={styles.favoriteBtn} onClick={() => handleClick(results[key])}>Add to favorites</button>
            <button onClick={() => showFoodPair() }>Show food pairing</button>
            <ul className={styles.foodPairingList}>
              { 
              results[key].food_pairing.map((food, i) => {
                return (
                  <li key={i}>{food}</li>
                 ) 
                }) 
              }
            </ul>
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
  