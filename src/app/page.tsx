"use client";

import { useState, SetStateAction } from 'react';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import blogPosts from '../utils/blogData';
import SearchLayout from '@/components/SearchLayout';
import './globals.css';

const ARTICLES_PER_PAGE = 10;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = blogPosts.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(blogPosts.length / ARTICLES_PER_PAGE);

  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div>
      <SearchLayout>
      <picture>
  <source srcSet="/images/pcmmh4.webp" media="(max-width: 640px)" />
  <source srcSet="/images/pcmmh3.webp" media="(max-width: 1040px)" />
  <source srcSet="/images/pcmmh2-Copy.webp" media="(max-width: 1460px)" />
  <img
    src="/images/pcmmh-Copy.webp"
    alt="Responsive Banner"
    style={{
      height: '40vh',       
      width: '100vw',       
      objectFit: 'cover',
      objectPosition: 'bottom',
      marginTop: '20px',
    }}
    loading="lazy"
  />
</picture>

      <div className="cardCont">
        {currentArticles.map((post) => (
          <div key={post.id}>
            <ArticleCard
              id={post.id}
              thumbnailSrc={post.thumbnailSrc}
              title={post.title}
              excerpt={post.excerpt}
              author={post.author}
              date={post.date}
              size={""}
            />
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </SearchLayout>
    </div>
  );
}
