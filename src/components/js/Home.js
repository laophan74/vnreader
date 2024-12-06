import React from 'react';
import NewsSection from './NewsSection';
import TopBar from './TopBar';
import '../css/Home.css';

const Home = () => {
  const categories = [
    'National',
    'World',
    'Lifestyle',
    'Travel',
    'Technology',
    'Sport',
  ];

  return (
    <div className="Home">
      {categories.map((category, index) => (
        <NewsSection key={index} category={category} />
      ))}
    </div>
  );
};

export default Home;
