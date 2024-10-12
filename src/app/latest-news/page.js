"use client";

import { useState, useEffect } from 'react';
import ArticleCard from '../../components/ArticleCard';
import Pagination from '../../components/Pagination';
import SearchLayout from '@/components/SearchLayout';
import blogPosts from '../../utils/blogData';

const ARTICLES_PER_PAGE = 10;

const carReviews = blogPosts.filter(post => post.category === 'Latest News');

export default function CarReviews() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = carReviews.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(carReviews.length / ARTICLES_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div>
      <SearchLayout>
        <div className="cardCont">
          {currentArticles.map((post) => (
            <div key={post.id}>
              <ArticleCard
                id={post.id}
                imgSrc={post.imgSrc}
                title={post.title}
                excerpt={post.excerpt}
                author={post.author}
                date={post.date}
              />

              {/* Insert AdSense after 6 articles, but only if there are more than 6 articles */}
              {/* {index === 5 && shouldShowAd && isClient && (
              <div className="adsense-container">
                
              </div>
            )} */}
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
