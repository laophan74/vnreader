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
    'Entertainment',
    'Technology',
    'Finance',
    'Sport',
  ];

  return (
    <div className="Home">
      <TopBar />
      {categories.map((category, index) => (
        <NewsSection key={index} category={category} />
      ))}
    </div>
  );
};

export default Home;
