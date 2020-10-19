import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resultsActions } from '../../redux/actions'
import Search from '../../components/Search/Search';
import Results from '../../components/Results/Results'; 
import Loader from '../../components/Loader/Loader'; 
import API_URL from '../../utils/apiUrl';
import styles from './Home.module.css'

const Home = () => {
  const results = useSelector(state => state.results.list);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`${API_URL}/beers`);
      const beers = await res.json();
      if (beers) {
        dispatch(resultsActions.onLoad(beers));
        setIsLoaded(true);
      }
    }
    fetchData();
  }, [dispatch]);
  

 const handleSearch = async (searchTerm) => {
    setIsLoaded(false);
    const res = await fetch(`${API_URL}/beers?beer_name=${searchTerm}`);
    const beers = await res.json();
      if (beers) {
        dispatch(resultsActions.onLoad(beers));
        setIsLoaded(true);
      }
  }
      
  return (
      <div className={styles.pageGrid}>
        <h1 className={styles.header}>The Amazing Beer App</h1>
        <Search performSearch={handleSearch} />
        {isLoaded ? <Results results={results} /> : <Loader /> }
      </div>
    )
  }

export default Home;
 