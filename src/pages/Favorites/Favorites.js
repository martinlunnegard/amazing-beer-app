import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import mockImg from '../../assets/mock.png'
import styles from './Favorites.module.css';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.list);

  const removeItem = () => {
    console.log('Remove item'); 
  }


  const renderFavorites = (data) => {
    console.log(data, 'DATA FAVORITES'); 
    if(!data) return 

    return (
      Object.keys(data).map(key =>
        <div key={data[key].id} className={styles.favoritesRow}>
          <div className={styles.favoritesInnerRow}>
            <div className={styles.favoritesNameAbv}>
              <div className={styles.favoritesName}>{data[key].name}</div>
              <div className={styles.favoritesAbv}>{data[key].abv}%</div>
            </div>
            <div className={styles.favoritesImgWrapper}>
              <img className={styles.favoritesImg} src={data[key].image_url} alt={data[key].name} />
            </div>
          </div>  
          <button className={styles.removeBtn} onClick={removeItem}>Remove</button>
        </div>  
      )
    );
  }

  return (
    <div>
      <h2 className={styles.favoritesHeader}>My Favorites</h2>
      { renderFavorites(favorites) }
      <div className={styles.favoritesRow}>
          <div className={styles.favoritesInnerRow}>
            <div className={styles.favoritesNameAbv}>
              <div className={styles.favoritesName}>Name</div>
              <div className={styles.favoritesAbv}>6.66 %</div>
            </div>
            <div className={styles.favoritesImgWrapper}>
              <img className={styles.favoritesImg} src={mockImg} alt='mock' />
            </div>
          </div>  
          <button className={styles.removeBtn} onClick={removeItem}>Remove</button>
        </div>  
    </div>
  );
}

export default Favorites;
