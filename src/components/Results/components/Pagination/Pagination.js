import React from 'react';
import styles from './Pagination.module.css';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = []

  for(let i = 1; i<= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={styles.pageItem}>
            <button onClick={() => paginate(number)} className={styles.pageLink}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
