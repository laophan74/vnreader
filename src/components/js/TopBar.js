import React from 'react';
import '../css/TopBar.css';

const TopBar = () => {
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

  const handleScroll = (category) => {
    const section = document.getElementById(category.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="topbar">
      <h1 className="logo">VnReader</h1>
      <nav>
        <ul className="categories">
          {categories.map((category, index) => (
            <li
              key={index}
              className="category-item"
              onClick={() => handleScroll(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="button login">Log In</button>
        <button className="button signup">Sign Up</button>
      </div>
    </div>
  );
};

export default TopBar;
