import React, { useEffect, useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header/Header'; 
import Search from './components/Search/Search'; 
import Results from './components/Results/Results'; 
import Footer from './components/Footer/Footer'; 
import styles from './App.module.css'

function App(props) {
  const results = useSelector(state => state.results.list);
  const favorites = useSelector(state => state.favorites.list);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchData() {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const beers = await res.json();
    if (beers) {
      dispatch({ type: 'ON_LOAD', payload: beers });
      setIsLoaded(true);
    }

  }

  useEffect(() => {
    fetchData();
  }, []);
  
  // LOADER
  // FAVORITES / REDUX
  // PAGINATION
  // HOOKS
  // FOOD COMBINATIONS
  // FILTER

 const handleSearch = (searchTerm) => {
    setIsLoaded(false);
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`)
      .then(response => response.json())
      .then(result => { 
        if(!result) return
        setIsLoaded(true);   
      }); 
  }

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

  console.log(favorites, 'REDUX');

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.pageGrid}>
        <Search performSearch={handleSearch} />
        <div>
          <h2>Favorites</h2>
          { renderFavorites(favorites) }
        </div>
        {isLoaded ? <Results results={results} /> : '' }
      </div>
      <Footer />
    </div>
    )
  }

export default App;
 