// MemePage.js
import React from 'react';

import './MemePage.css';

const MemePage = () => {
    const blocks = [
        { text: 'Дильназ,ты девушка с самым основательным подходом при выборе продуктов и не только', sticker: "/images/choose.gif" },
        { text: 'И самым устращающим словом (Бан?)', sticker: "/images/ban.webp" },
        { text: 'Ты самая пофигистичная', sticker: "/images/asd.gif" },
        { text: 'Ты девушка с самым превлекающим видом ', sticker: "/images/ass.gif" },
        { text: 'И с прекасными руками', sticker: "/images/lap.webp" },
        { text: 'С прекрасным характером ', sticker: "/images/rage.gif" },
        { text: 'Коротко ты самая лучшая', sticker: "/images/flowers.webp" } ,
        
      ];
    
      const topText = (
        <div className="top-text">
          <p style={{ color: 'pink' }}>Кратко какая ты тоже </p>
        </div>
      );
        
    
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
        </div>
      );
    };
    

export default MemePage;
