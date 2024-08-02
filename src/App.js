import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Quiz from './Quiz';
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/quiz" element={<Quiz />} />

                    </Routes>
                </header>
            </div>
        </Router>
    );
}

export default App;
