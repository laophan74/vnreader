import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import '../css/NewsSection.css';

const NewsSection = ({ category }) => {
  const [news, setNews] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://vnreader-backend.vercel.app/api/posts?category=${category}`)
      .then((response) => {
        setNews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu:', error);
        setLoading(false);
      });
  }, [category]);

  useEffect(() => {
    axios
      .get('https://vnreader-backend.vercel.app/api/posts/recent')
      .then((response) => {
        setRecentPosts(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi lấy bài viết mới nhất:', error);
      });
  }, []);

  return (
    <div className="news-section-container">
      {/* Phần tin tức chính */}
      <div className="news-main">
        <h2>{category}</h2>
        <div className="news-grid">
          <div className="large-news">
            {loading ? (
              <NewsCard news={null} large />
            ) : (
              news[0] && <NewsCard news={news[0]} large />
            )}
          </div>

          <div className="middle-news">
            {loading
              ? [1, 2].map((index) => <NewsCard key={index} news={null} />)
              : news.slice(1, 3).map((newsItem) => (
                  <NewsCard key={newsItem._id} news={newsItem} />
                ))}
          </div>

          <div className="right-news">
            {loading
              ? [3, 4].map((index) => <NewsCard key={index} news={null} />)
              : news.slice(3, 5).map((newsItem) => (
                  <NewsCard key={newsItem._id} news={newsItem} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const formatTimeAgo = (date) => {
  const now = new Date();
  const postDate = new Date(date);
  const diff = Math.floor((now - postDate) / 60000);

  if (diff < 60) {
    return `${diff} minutes ago`;
  } else if (diff < 1440) {
    return `${Math.floor(diff / 60)} hours ago`;
  } else {
    return `${Math.floor(diff / 1440)} days ago`;
  }
};

export default NewsSection;
