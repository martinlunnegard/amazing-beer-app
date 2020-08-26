import React, { useEffect, useState, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Search from '../../components/Search/Search';
import Results from '../../components/Results/Results'; 
import API_URL from '../../utils/apiUrl';
import styles from './Home.module.css'

function Home(props) {
  const results = useSelector(state => state.results.list);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  async function fetchData() {
    const res = await fetch(`${API_URL}/beers`);
    const beers = await res.json();
    if (beers) {
      dispatch({ type: 'ON_LOAD', payload: beers });
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  // TODOS

  // LOADER
  // FAVORITES / ADD / REMOVE / REDUX
  // PAGINATION
  // HOOKS
  // FOOD COMBINATIONS
  // FILTER

 const handleSearch = (searchTerm) => {
    setIsLoaded(false);
    fetch(`${API_URL}/beers?beer_name=${searchTerm}`)
      .then(response => response.json())
      .then(result => { 
        if(!result) return
        setIsLoaded(true);   
      }); 
  }

  return (
      <div className={styles.pageGrid}>
        <h1 className={styles.header}>The Amazing Beer App</h1>
        <Search performSearch={handleSearch} />
        {isLoaded ? <Results results={results} /> : '' }
      </div>
    )
  }

export default Home;
 