import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/js/Home';
import Post from './components/js/Post';
import './App.css';
import TopBar from './components/js/TopBar';

const App = () => {
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:title" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
