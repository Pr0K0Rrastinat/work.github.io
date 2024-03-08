// MainPage.js
import React from 'react';
import './MainPage.css';

const MainPage = ({ onButtonClick }) => {
  return (
    <div className="main-page">
      <div className="greeting-text">
        С 8 Марта
      </div>
      <div className='MainBlock'>
        <img src="images/cat1.gif" alt="My GIF" />
        <button onClick={onButtonClick} className="pink-button">
          Открыть открытку 
        </button>
      </div>
    </div>
  );
};

export default MainPage;
