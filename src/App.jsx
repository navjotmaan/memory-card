import { useEffect, useState } from 'react'
import Fetch from './components/Fetch';
import MyPopup from './components/Popup';
import './styles/App.css'

export default function App() {
  const [scores, setScores] = useState(0);
  const [highestScores, setHighestScores] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [message, setMessage] = useState('Game Over!');
  const [showRules, setShowRules] = useState(false);

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
      <button title='Game Rules' id='info' onClick={() => setShowRules(true)}>?</button>
    </header>

    <Fetch touchCard={touchBox} handleScores={endGame}/>

    {showPopup && (
      <MyPopup
        message={message}
        onClose={() => setShowPopup(false)}
      />
    )}

    {showRules && (
      <>
      <div className="backdrop" onClick={() => setShowRules(false)}></div>

      <div className='popup' id='rules' role='dialog'>
      <h2>Game Rules</h2>
      <p>Don't click the same card twice!</p>
      <p>You get 1 point for clicking each card. Click the same card again — Game Over!</p>
      <button onClick={() => setShowRules(false)}>Got it!</button>
    </div>
    </>
    )}

    </div>
  )
}

 
