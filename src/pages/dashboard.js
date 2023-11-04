
import MainNavigation from "../components/MainNavigation";
import { connect } from 'react-redux';
import React, { useState } from 'react';
import './Dashboard.css';
import redColorImage from '../assets/red.png';
import blueColorImage from '../assets/blue.png';
import greenColorImage from '../assets/green.png';
import yellowColorImage from '../assets/yellow.png';
import pinkColorImage from '../assets/pink.png';
import purpleColorImage from '../assets/purple.png';
import blackColorImage from '../assets/black.png';
import maroonColorImage from '../assets/maroon.png';
import skyblueColorImage from '../assets/skyblue.png';

const Dashboard = () => {
  const [suggestedColor, setSuggestedColor] = useState('');

  const handleGetColorSuggestion = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setSuggestedColor(randomColor);
  };

  const getColorImage = (color) => {
    switch (color) {
      case 'red':
        return redColorImage;
      case 'blue':
        return blueColorImage;
      case 'green':
        return greenColorImage;
      case 'yellow':
        return yellowColorImage;
      case 'pink':
        return pinkColorImage;
      case 'purple':
        return purpleColorImage;
        case 'black':
        return blackColorImage;
        case 'maroon':
         return maroonColorImage;
         case 'sky blue':
          return skyblueColorImage;
         
      default:
        return null;
   
    }
  };

  return (
    <div className="dashboard dashboard-container">
      <h2>Color Suggestion Dashboard</h2>
      <button onClick={handleGetColorSuggestion}>
        Get Color Suggestion
      </button>
      {suggestedColor && (
        <div className="color-container">
          <img
            src={getColorImage(suggestedColor)}
            alt={suggestedColor}
            className="color-image"
          />
          <p>Suggested Color: {suggestedColor}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
