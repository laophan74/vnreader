import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Để lấy params từ URL
// import '../css/Post.css';

const Post = () => {
  const { title } = useParams(); // Lấy title từ URL params
  const [post, setPost] = useState(null); // State để lưu bài viết
  const [loading, setLoading] = useState(true); // Trạng thái loading

  useEffect(() => {
    // Gọi API để lấy bài viết chi tiết
    axios
      .get(`https://vnreader-backend.vercel.app/api/posts/${title}`) // URL API cần có post/:title
      .then((response) => {
        setPost(response.data); // Lưu dữ liệu bài viết
        setLoading(false); // Đổi trạng thái loading khi dữ liệu được tải
      })
      .catch((error) => {
        console.error('Lỗi khi lấy bài viết:', error);
        setLoading(false);
      });
  }, [title]); // useEffect sẽ chạy lại khi title thay đổi

  if (loading) {
    return <div>Loading...</div>; // Hiển thị loading nếu bài viết đang được tải
  }

  if (!post) {
    return <div>Bài viết không tồn tại!</div>; // Hiển thị nếu không tìm thấy bài viết
  }

  return (
    <div className="post">
      <h1>{post.title}</h1>
      {/* Không hiển thị hình ảnh ở đây */}
      <p>{post.description}</p>
      <div>{post.content}</div> {/* Hiển thị nội dung chi tiết */}
    </div>
  );
};

export default Post;
