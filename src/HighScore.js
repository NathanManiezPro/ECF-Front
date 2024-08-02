// HighScore.js
import React from 'react';
import './HighScore.css';

const HighScore = ({ highScore }) => {
    return (
        <div className="high-score">
            Meilleur Score : {highScore}
        </div>
    );
};

export default HighScore;
