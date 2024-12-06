import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/JustIn.css';

const JustIn = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://vnreader-backend.vercel.app/api/posts/recent')
      .then((response) => {
        setLatestPosts(response.data);
      })
      .catch((error) => console.error('Error fetching latest posts:', error));
  }, []);

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diff = now - new Date(date);
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (days > 0) {
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
      return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
  };

  return (
    <div className="just-in-container">
      <h2>Just in</h2>
      {latestPosts.map((post) => (
        <div key={post._id} className="just-in-item">
          <Link to={`/post/${post._id}`} className="just-in-title">
            <p>{post.title}</p>
          </Link>
          <small>{formatTimeAgo(post.date)}</small>
          <hr className="divider" />
        </div>
      ))}
    </div>
  );
};

export default JustIn;
