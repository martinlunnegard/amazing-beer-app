import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { favoritesActions } from  '../../redux/actions'
import { faSkullCrossbones, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './Favorites.module.css';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.list);
  const dispatch = useDispatch();

  const removeItem = (obj) => {
    dispatch(favoritesActions.removeFavorite(obj));
  }

  const renderFavorites = (data) => {
    if(!data) return 

    return (
      Object.keys(data).map(key =>
        <div key={data[key].id} className={styles.favoritesRow}>
          <div className={styles.favoritesInnerRow}>
            <div className={styles.favoritesNameAbv}>
              <div>
                <div className={styles.favoritesName}>{data[key].name}</div>
                <div className={styles.favoritesBrewTips}>
                  <div><strong>Brewer's tips:</strong></div>
                  <div>"{data[key].brewers_tips}"</div>
                </div>
              </div>
              <div className={styles.favoritesAbv}>Vol: {data[key].abv}%</div>
            </div>
            <div className={styles.favoritesImgWrapper}>
              <img className={styles.favoritesImg} src={data[key].image_url} alt={data[key].name} />
            </div>
          </div>  
          <button className={styles.removeBtn} onClick={() => removeItem(data[key])}>
            <FontAwesomeIcon icon={faSkullCrossbones} />
          </button>
        </div>  
      )
    );
  }

  return (
    <div className={styles.pageGrid}>
      <h2 className={styles.favoritesHeader}>My Favorites:</h2>

      {favorites.length >= 1 
        ? renderFavorites(favorites) 
        : <div className={styles.noFavorites}>No favorites! Tap the <FontAwesomeIcon icon={faHeart} /> icon to get started</div> 
      }
    </div>
  );
}

export default Favorites;
