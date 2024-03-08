// App.js
import React, { useState } from 'react';
import MainPage from './MainPage';
import StickerPage from './StickerPage';

const App = () => {
  const [showStickerPage, setShowStickerPage] = useState(false);

  const handleButtonClick = () => {
    setShowStickerPage(!showStickerPage);
  };

  return (
    <div>
      {showStickerPage ? (
        <StickerPage onButtonClick={handleButtonClick} />
      ) : (
        <MainPage onButtonClick={handleButtonClick} />
      )}
    </div>
  );
};

export default App;
