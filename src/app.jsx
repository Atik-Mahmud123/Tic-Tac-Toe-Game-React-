import React from 'react'
import './App.css';
import Game from './components/game';

const App = () => {
    return (
        <div className='app'>
            <h1>Tic Tac Toe Game</h1>
            <p>Hints: Try to match 'x' 3 in a row.</p> 
            <Game/>
        </div>
    )
}

export default App;
