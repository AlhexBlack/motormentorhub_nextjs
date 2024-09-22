import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Pagination.module.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className={styles.pagination}>
                {currentPage > 1 && (
                    <li onClick={() => onPageChange(currentPage - 1)}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </li>
                )}
                {pageNumbers.map((number) => (
                    <li
                        key={number}
                        className={number === currentPage ? styles.activePage : ''}
                        onClick={() => onPageChange(number)}
                    >
                        {number}
                    </li>
                ))}
                {currentPage < totalPages && (
                    <li onClick={() => onPageChange(currentPage + 1)}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Pagination;
