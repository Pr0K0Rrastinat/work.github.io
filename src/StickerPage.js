// StickerPage.js
import React, { useState } from 'react';
import './StickerPage.css';
import MemePage from './MemePage';

const StickerPage = () => {

const [showMemePage, setShowMemePage] = useState(false);


  const blocks = [
    { text: 'Дильназ,ты девушка с самым разнообразным вкусом в музыке', sticker: "/images/catlmusic.webp" },
    { text: 'И самая милая девушка', sticker: "/images/cute.webp" },
    { text: 'Самая грациозная', sticker: "/images/gracia.gif" },
    { text: 'С самой прекрасной улыбкой', sticker: "/images/laughcat.webp" },
    { text: 'Ты самая умная', sticker: "/images/smartcat.webp" },
    { text: 'И самая позитивная ', sticker: "/images/positivecat.gif" },
    { text: 'Ты просто сногсшибательная', sticker: "/images/snogcat.webp" },
    { text: 'С самым чутькой вкусом выбора чая', sticker: "/images/teacat.webp" },
    { text: 'Ты лучшая мотиватерша (Работай нигер,работай)', sticker: "/images/motivated.gif" },
    { text: 'Самая заботливая ', sticker: "/images/carecat.webp" },
    { text: 'Ты самая самая,я люблю тебя ', sticker: "/images/lovecat.webp" },
  ];

  const topText = (
    <div className="top-text">
      <p style={{ color: 'pink' }}>Кратко какая ты </p>
    </div>
  );

  const handleButtonClick = () => {
    setShowMemePage(true); // Устанавливаем showMemePage в true при нажатии кнопки
  };

  // Если showMemePage равен true, отображаем MemePage
  if (showMemePage) {
    return <MemePage />;
  }

  return (
    <div className="sticker-page">
      {topText}
      {blocks.map((block, index) => (
        <div key={index} className={`block ${index % 2 === 0 ? 'even' : ''}`}>
          <div className="sticker-block">
            <img src={block.sticker} alt={`Sticker ${index}`} />
          </div>
          <div className="text-block">
            <p>{block.text}</p>
          </div>
        </div>
      ))}
      <div className="bottom-button">
        <button onClick={handleButtonClick} className="pink-button">
          Перейти в раздел Мемов
        </button>
      </div>
    </div>
  );
};


export default StickerPage;
