"use client";

import { useState, useEffect} from 'react';
import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import blogPosts from '@/utils/blogData';
import AdSenseComponent from '@/components/AdSenseComponent';

const ARTICLES_PER_PAGE = 10;

const latestNews = blogPosts.filter(post => post.category === 'Latest News');

export default function LatestNews() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false); // Track if we are on the client side

  useEffect(() => {
    // Set isClient to true after the component has mounted on the client side
    setIsClient(true);
  }, []);


  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = latestNews.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(latestNews.length / ARTICLES_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const shouldShowAd = currentArticles.length > 6;

  return (
    <div>
      <div className="cardCont">
        {currentArticles.map((post, index) => (
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
            {index === 5 && shouldShowAd && isClient && (
              <div className="adsense-container">
                <AdSenseComponent/>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Ad at the bottom of the articles, only on the client side */}
      {isClient && (
        <AdSenseComponent/>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
