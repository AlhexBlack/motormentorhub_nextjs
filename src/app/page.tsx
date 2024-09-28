"use client";

import { useState, useEffect, SetStateAction } from 'react';
import ArticleCard from '../components/ArticleCard';
import Pagination from '../components/Pagination';
import blogPosts from '../utils/blogData';
import AdSenseComponent from '@/components/AdSenseComponent';
import SearchLayout from '@/components/SearchLayout';
import './globals.css';

const ARTICLES_PER_PAGE = 10;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isClient, setIsClient] = useState(false); // Track if we are on the client side

  useEffect(() => {
    // Set isClient to true after the component has mounted on the client side
    setIsClient(true);
  }, []);

  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = blogPosts.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(blogPosts.length / ARTICLES_PER_PAGE);

  const handlePageChange = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  // const shouldShowAd = currentArticles.length > 6;

  return (
    <div>
      <SearchLayout>
      <img 
        srcSet="
          /images/pcmmh4.webp 640w,
          /images/pcmmh3.webp 1040w,
          /images/pcmmh2-Copy.webp 1460w,
          /images/pcmmh-Copy.webp 1920w"
        sizes="
          (max-width: 640px) 100vw,
          (max-width: 1040px) 100vw,
          (max-width: 1460px) 100vw,
          100vw"
        src="/images/pcmmh-Copy.webp" 
        alt="Responsive Banner" 
        style={{ 
          height: '40vh', 
          width: '100vw', 
          objectFit: 'cover', 
          objectPosition: 'bottom', 
          marginTop: '20px' 
        }}
        loading='lazy'
      />

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
              size={""}
            />

            {/* Insert AdSense after 6 articles, but only if there are more than 6 articles */}
            {/* {index === 5 && shouldShowAd && isClient && (
              <div className="adsense-container">
                <AdSenseComponent 
                adLayoutKey=""
                adSlot=""
                adFormat=''
                adStyle=""
                key="" />

              </div>
            )} */}
          </div>
        ))}
      </div>

      {/* Ad at the bottom of the articles, only on the client side */}
      {isClient && (
        <AdSenseComponent 
          adLayoutKey=""
          adSlot=""
          adFormat=''
          adStyle=""
          key="" />
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      </SearchLayout>
    </div>
  );
}
