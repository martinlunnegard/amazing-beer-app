import React, { useState, useEffect } from 'react';
import Beer from './components/Beer/Beer';
import Pagination from './components/Pagination/Pagination';
import styles from './Results.module.css'; 

function Results({ results }) {
  const beerList = results;

  const [currentPage, setCurrentPage] = useState(1); 
  const [itemsPerPage] = useState(5); 

  const indexOfLastItem = currentPage * itemsPerPage; 
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = beerList.slice(indexOfFirstItem, indexOfLastItem);
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  } 
  
  return (
    <div className={styles.searchResults}> 
      { Object.keys(currentItems).map(key => 
        <Beer beer={currentItems[key]} key={currentItems[key].id} />
      )}  
      <Pagination 
        itemsPerPage={itemsPerPage} 
        totalItems={Object.keys(beerList).length} 
        paginate={paginate} 
      />
    </div>
  )
   
  }
  
  export default Results;
  