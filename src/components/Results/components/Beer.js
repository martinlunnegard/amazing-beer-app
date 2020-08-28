import React from 'react';
import styles from './Beer.module.css';

const Beer = ({ beer }) => {
  if(!beer) return
  return (
    <div className={styles.beerContainer} key={beer.id}> 
      <div className={styles.beerInfoContainer}>
        <div className={styles.beerName}>{ beer.name }</div>
        <p className={styles.beerTagline}>{ beer.tagline }</p>
        <p className={styles.beerDescription}>{ beer.description }</p>
        {/* <button className={styles.favoriteBtn} onClick={() => addToFavorites(results[key])}>Add to favorites</button>
        <button onClick={() => showFoodPair() }>Show food pairing</button>
        <ul className={styles.foodPairingList}>
          { 
          results[key].food_pairing.map((food, i) => {
            return (
              <li key={i}>{food}</li>
              ) 
            }) 
          }
        </ul> */}
      </div>	
      <div className={styles.beerImgWrapper}>
        <img alt={ beer.name } src={ beer.image_url } />
      </div>
    </div>
  );
}

export default Beer;
