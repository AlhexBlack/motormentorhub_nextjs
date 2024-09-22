import { useState } from 'react';
import styles from '../styles/SearchBar.module.css';
import searchBlogs from '@/utils/searchHandler'; 

function SearchBar({ onSearchResults }) {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        const result = searchBlogs(query);
        onSearchResults(result);
        setQuery('');
    };

    return (
        <form onSubmit={handleSearch} className={styles.searchBar}>
            <input
                type="text"
                placeholder="Search blogs..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className={styles.searchInput}
            />
            <button type="submit" className={styles.searchButton}>
                Search
            </button>
        </form>
    );
}

export default SearchBar;
