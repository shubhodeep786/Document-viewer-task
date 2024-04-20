import React, { FC } from 'react';
import styles from '../styles/Home.module.css'; 

type PaginationProps = {
  itemsPerPage: number;
  totalItems: number;
  paginate: (pageNumber: number) => void;
  currentPage: number;
};

/**
 * Pagination component for displaying a list of page numbers and handling pagination.
 *
 * @component
 * @param {PaginationProps} props - The pagination component props.
 * @param {number} props.itemsPerPage - The number of items to display per page.
 * @param {number} props.totalItems - The total number of items.
 * @param {Function} props.paginate - The function to handle pagination.
 * @param {number} props.currentPage - The current active page.
 * @returns {JSX.Element} The pagination component.
 */
const Pagination: FC<PaginationProps> = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers: number[] = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={styles.paginationContainer}>
      <nav aria-label="Pagination">
        <ul className={styles.pagination}>
          {pageNumbers.map(number => (
            <li key={number} className={currentPage === number ? styles.active : ''}>
              <button onClick={() => paginate(number)} disabled={currentPage === number}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
