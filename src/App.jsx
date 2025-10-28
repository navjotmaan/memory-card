import { useEffect, useState } from 'react'
import Fetch from './Fetch';
import MyPopup from './Popup';
import './App.css'

export default function App() {
  const [scores, setScores] = useState(0);
  const [highestScores, setHighestScores] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('Game Over!');

  function touchBox() {
    setScores(prev => prev + 1);
  }

  function endGame(messageText) {
    setMessage(messageText);
    setShowPopup(true);
    setScores(0);
  }

  useEffect(() => {
    if (scores > highestScores) {
      setHighestScores(scores);
    }

    if (scores === 12) {
      endGame('YOU WON!'); 
    }
  }, [scores, highestScores]);

  return (
    <div className='container'>
    <header>
      <h1>Memory Card</h1>
      <div className='scores'>
        <h2 id='score'>Scores: {scores}</h2>
        <h2>Highest Scores: {highestScores}</h2>
      </div>
    </header>

    <Fetch touchCard={touchBox} handleScores={endGame}/>

    {showPopup && (
      <MyPopup
        message={message}
        onClose={() => setShowPopup(false)}
      />
    )}

    </div>
  )
}

 
