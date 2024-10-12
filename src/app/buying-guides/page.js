"use client";

import { useState} from 'react';
import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import blogPosts from '@/utils/blogData';
import SearchLayout from '@/components/SearchLayout';

const ARTICLES_PER_PAGE = 10;

const buyingGuide = blogPosts.filter(post => post.category === 'Buying Guide');

export default function BuyingGuides() {
  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = buyingGuide.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(buyingGuide.length / ARTICLES_PER_PAGE);

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
