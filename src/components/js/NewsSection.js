import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import '../css/NewsSection.css';

const NewsSection = ({ category }) => {
  const [news, setNews] = useState([]); // State để lưu bài viết
  const [loading, setLoading] = useState(true); // State để theo dõi trạng thái loading

  useEffect(() => {
    // Gọi API từ backend, truyền category vào URL để lấy bài viết theo category
    axios
      .get(`https://vnreader-backend.vercel.app/api/posts?category=${category}`)
      .then((response) => {
        console.log("Dữ liệu lấy được từ API:", response.data); // Log ra dữ liệu lấy được từ backend
        setNews(response.data); // Lưu dữ liệu vào state
        setLoading(false); // Đổi trạng thái loading khi dữ liệu đã được tải
      })
      .catch((error) => {
        console.error('Lỗi khi lấy dữ liệu:', error);
        setLoading(false); // Đổi trạng thái loading khi gặp lỗi
      });
  }, [category]); // useEffect chỉ chạy lại khi category thay đổi

  return (
    <div id={category.toLowerCase()} className="news-section">
      <h2>{category}</h2>
      <div className="news-grid">
        <div className="large-news">
          {/* Hiển thị bài viết lớn đầu tiên */}
          {loading ? (
            <NewsCard news={null} large /> // Hiển thị thẻ NewsCard khi loading
          ) : (
            news[0] && <NewsCard news={news[0]} large />
          )}
        </div>

        <div className="middle-news">
          {/* Hiển thị các bài viết trung bình */}
          {loading
            ? [1, 2].map((index) => <NewsCard key={index} news={null} />) // Hiển thị thêm NewsCard khi loading
            : news.slice(1, 3).map((newsItem) => <NewsCard key={newsItem._id} news={newsItem} />)}
        </div>

        <div className="right-news">
          {/* Hiển thị các bài viết còn lại */}
          {loading
            ? [3, 4].map((index) => <NewsCard key={index} news={null} />) // Hiển thị thêm NewsCard khi loading
            : news.slice(3, 5).map((newsItem) => <NewsCard key={newsItem._id} news={newsItem} />)}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
