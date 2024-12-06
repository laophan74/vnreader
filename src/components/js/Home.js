import React from 'react';
import NewsSection from './NewsSection';
import TopBar from './TopBar';
import JustIn from './JustIn';  // Import JustIn component
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
      <TopBar />
      <div className="home-content">
        <div className="news-sections">
          {categories.map((category, index) => (
            <NewsSection key={index} category={category} />
          ))}
        </div>
        <div className="just-in">
          <JustIn />
        </div>
      </div>
    </div>
  );
};

export default Home;
