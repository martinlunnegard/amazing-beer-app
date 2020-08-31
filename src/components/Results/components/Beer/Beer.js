import React, { useState} from 'react';
import { useDispatch } from 'react-redux';
import { favoritesActions } from  '../../../../redux/actions'
import styles from './Beer.module.css';

const Beer = ({ beer }) => {
  const [showFood, setShowFood] = useState(false);
  const [favorite, setFavorite] = useState(false); 
  const dispatch = useDispatch();
 
  const addToFavorites = (e, obj) => {
    e.preventDefault();
    setFavorite(favorite => !favorite); 
    dispatch(favoritesActions.addFavorite(obj)); 
  }

  const showFoodPair = (e) => {
    setShowFood(!showFood);
  }

  if(!beer) return

  return (
    <div className={styles.beerContainer} key={beer.id}> 
      <div className={styles.beerInfoContainer}>
        <div className={styles.beerName}>{ beer.name }</div>
        <p className={styles.beerTagline}>{ beer.tagline }</p>
        <p className={styles.beerDescription}>{ beer.description }</p>
        <button 
          className={favorite ? styles.favoriteBtnActive : styles.favoriteBtn} 
          disabled={favorite}
          onClick={(e) => addToFavorites(e, beer)}>
          Add to favorites
        </button>
        <button onClick={() => showFoodPair() }>Show food pairings</button>
        <ul className={styles.foodPairingList}>
          { 
          beer.food_pairing.map((food, i) => {
            return (
              <li key={i}>{food}</li>
              ) 
            }) 
          }
        </ul>
      </div>	
      <div className={styles.beerImgWrapper}>
        <img alt={ beer.name } src={ beer.image_url } />
      </div>
    </div>
  );
}

export default Beer;
