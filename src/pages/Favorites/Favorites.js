import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Favorites.module.css';

const Favorites = () => {
  const favorites = useSelector(state => state.favorites.list);

  const renderFavorites = (data) => {
    if(!data) return 
      return (
        data.map((name, i) => {
          return (
            <div>{name}</div>
          )
        })
      )
  }

  return (
    <div>
      <h2>Favorites</h2>
      { renderFavorites(favorites) }
    </div>
  );
}

export default Favorites;
