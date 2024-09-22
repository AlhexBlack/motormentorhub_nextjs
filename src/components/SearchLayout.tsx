'use client';

import { useState } from 'react';
import SearchBar from './SearchBar';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  const [searchResults, setSearchResults] = useState(null);

  const handleSearchResults = (results: any) => {
    setSearchResults(results);
  };

  const handleClearSearch = () => {
    setSearchResults(null);
  };

  return (
    <>
      <SearchBar onSearchResults={handleSearchResults} />
      <div className="searchResults">
        {searchResults !== null ? (
          searchResults.length > 0 ? (
            <ul className="searchList">
              <div className="clearDiv">
                <h3>Search Results:</h3>
                <button className="clearButton" onClick={handleClearSearch}>Clear</button>
              </div>
              {searchResults.map((post: any) => (
                <li key={post.id}>
                  <a href={`/blog/${post.id}`} onClick={handleClearSearch}>
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="noResults">
              <p>No results found</p>
              <button className="clearButton" onClick={handleClearSearch}>Close</button>
            </div>
          )
        ) : null}
      </div>
      {children}
    </>
  );
}