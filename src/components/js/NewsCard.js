import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NewsCard.css';

const NewsCard = ({ news, large }) => {
  // Kiểm tra xem news có tồn tại và có thuộc tính title hay không
  if (!news || !news.title) {
    return <div>Loading...</div>; // Nếu không có dữ liệu, hiển thị "Loading..."
  }

  return (
    <div className={`news-card ${large ? 'large' : ''}`}>
      {/* Không hiển thị hình ảnh nếu chưa có data hình ảnh */}
      <h3><Link to={`/post/${news.title}`}>{news.title}</Link></h3>
      <p>{news.description}</p>
    </div>
  );
};

export default NewsCard;
