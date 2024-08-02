import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const allerAuQuiz = () => {
        navigate('/quiz');
    };

    return (
        <div className="home">
            <div className="home-content">
                <h1>Bienvenue dans Quiz Aventure</h1>
                <p>Es-tu prêt a Jouer au Quizz impossible de OnePiece ???</p>
                <button className="play-button" onClick={allerAuQuiz}>Jouer au jeu</button>
            </div>
        </div>
    );
};

export default Home;
