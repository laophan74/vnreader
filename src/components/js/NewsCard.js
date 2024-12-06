import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NewsCard.css';

const NewsCard = ({ news, large }) => {
  // Kiểm tra xem news có tồn tại và có thuộc tính title hay không
  const title = news && news.title ? news.title : 'Loading...';
  const description = news && news.description ? news.description : 'Loading...';
  const imageUrl = news && news.thumbnail ? news.thumbnail : '';  // Lấy URL ảnh từ field thumbnail trong news

  return (
    <div className={`news-card ${large ? 'large' : ''}`}>
      {/* Hiển thị ảnh thumbnail nếu có */}
      {imageUrl && <img src={imageUrl} alt={title} />}
      
      <h3><Link to={`/post/${news ? news._id : ''}`}>{title}</Link></h3>
      <p>{description}</p>
    </div>
  );
};

export default NewsCard;
