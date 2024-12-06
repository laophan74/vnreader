import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/Post.css';

const Post = () => {
  const { title } = useParams(); // Lấy tiêu đề bài viết từ URL
  const [post, setPost] = useState(null); // State để lưu bài viết
  const [loading, setLoading] = useState(true); // State để theo dõi trạng thái loading

  useEffect(() => {
    // Gọi API để lấy chi tiết bài viết dựa trên tiêu đề
    axios
      .get(`https://vnreader-backend.vercel.app/api/posts/${title}`)
      .then((response) => {
        setPost(response.data); // Lưu bài viết vào state
        setLoading(false); // Tắt trạng thái loading
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false); // Tắt trạng thái loading nếu có lỗi
      });
  }, [title]);

  if (loading) {
    return <div className="post-container">Loading...</div>;
  }

  if (!post) {
    return <div className="post-container">Can't find the post!</div>;
  }

  return (
    <div className="post-container">
      <h1 className="post-title">{post.title}</h1>
      <img className="post-thumbnail" src={post.thumbnail} alt={post.title} />
      <p className="post-date">Date: {new Date(post.date).toLocaleDateString()}</p>
      <p className="post-author">Author: {post.author}</p>
      <div className="post-content">{post.content}</div>
    </div>
  );
};

export default Post;
