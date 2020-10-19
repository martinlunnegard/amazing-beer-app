import React, { useState } from 'react';
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
  const totalItems = Object.keys(beerList).length;
  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  } 
  
  return (
    <div className={styles.searchResults}> 
    
      {currentItems.length >= 1 
        ? Object.keys(currentItems).map(key => 
          <Beer beer={currentItems[key]} key={currentItems[key].id} />
        )
        : <div className={styles.noResults}>No results, please try again</div>  
      }  
      
      {totalItems > 5 && 
        <Pagination 
          itemsPerPage={itemsPerPage} 
          totalItems={totalItems} 
          paginate={paginate} 
      />}
    </div>
  )
   
  }
  
  export default Results;
  