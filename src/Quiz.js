
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quiz.css';
import HighScore from './HighScore';

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [answerStatus, setAnswerStatus] = useState(null);
    const [highScores, setHighScores] = useState([]);
    const [highScore, setHighScore] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3001/api/questions')
            .then(response => {
                setQuestions(response.data);
                const savedProgress = JSON.parse(localStorage.getItem('quizProgress')) || {};
                setCurrentQuestionIndex(savedProgress.index || 0);
                setScore(savedProgress.score || 0);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des questions !", error);
                alert("Erreur lors de la récupération des questions !");
            });

        axios.get('http://localhost:3001/api/scores')
            .then(response => {
                setHighScores(response.data);
                if (response.data.length > 0) {
                    setHighScore(response.data[0]); // Mettre à jour le meilleur score mais ça ne fonctionne pas encore
                }
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des scores !", error);
                alert("Erreur lors de la récupération des scores !");
            });
    }, []);

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            setScore(prevScore => prevScore + 1);
            setAnswerStatus('correct');
        } else {
            setAnswerStatus('incorrect');
        }

        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < questions.length) {
            setTimeout(() => {
                setCurrentQuestionIndex(nextQuestionIndex);
                setAnswerStatus(null);
            }, 1000);
        } else {
            setShowScore(true);
            const finalScore = score + (isCorrect ? 1 : 0);
            axios.post('http://localhost:3001/api/scores', { score: finalScore })
                .then(response => {
                    setHighScores(response.data);
                    if (response.data.length > 0) {
                        setHighScore(response.data[0]);
                    }
                })
                .catch(error => {
                    console.error("Erreur lors de l'envoi du score !", error);
                });
        }

        const progress = {
            index: nextQuestionIndex,
            score: score + (isCorrect ? 1 : 0)
        };
        localStorage.setItem('quizProgress', JSON.stringify(progress));
    };

    const handleRestartClick = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowScore(false);
        setAnswerStatus(null);
        localStorage.removeItem('quizProgress');
    };

    return (
        <div className="quiz">
            <HighScore highScore={highScore} />
            <h1>Quiz Aventure</h1>
            {showScore ? (
                <div className="score-section">
                    <h2>Vous avez {score} sur {questions.length} !</h2>
                    <button className="restart-button" onClick={handleRestartClick}>Revenir au début du jeu</button>
                    <div className="high-scores">
                        <h3>Meilleurs Scores</h3>
                        <ol>
                            {highScores.map((score, index) => (
                                <li key={index}>Score : {score}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            ) : (
                questions.length > 0 && (
                    <div className="question-section">
                        <h2>Question {currentQuestionIndex + 1} sur {questions.length}</h2>
                        <h2>{questions[currentQuestionIndex].question}</h2>
                        <div className="options-container">
                            {questions[currentQuestionIndex].options.map((option, index) => (
                                <button
                                    key={index}
                                    className={`answer-button ${answerStatus === 'correct' && option === questions[currentQuestionIndex].answer ? 'correct' : ''} ${answerStatus === 'incorrect' && option === questions[currentQuestionIndex].answer ? 'incorrect' : ''}`}
                                    onClick={() => handleAnswerClick(option === questions[currentQuestionIndex].answer)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                        {answerStatus === 'correct' && <p className="feedback">Correct !</p>}
                        {answerStatus === 'incorrect' && <p className="feedback">Incorrect !</p>}
                        <div className="current-score">
                            <p>Score actuel: {score}</p>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default Quiz;
