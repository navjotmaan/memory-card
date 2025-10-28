import { useEffect, useState } from 'react'
import Fetch from './Fetch';
import './App.css'

export default function App() {
  const [scores, setScores] = useState(0);
  const [highestScores, setHighestScores] = useState(0);

  function touchBox() {
    setScores(prev => prev + 1);
  }

  function resetScores() {
    setScores(0);
  }

  useEffect(() => {
    if (scores > highestScores) {
      setHighestScores(scores);
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

    <Fetch touchCard={touchBox} handleScores={resetScores}/>

    </div>
  )
}

 
