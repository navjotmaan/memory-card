import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [scores, setScores] = useState(0);
  const [highestScores, setHighestScores] = useState(scores);

  function touchBox() {
    setScores(scores + 1);
  }

  return (
    <>
    <header>
      <h1>Memory Card</h1>
      <div className='scores'>
        <h2 id='score'>Scores: {scores}</h2>
        <h2>Highest Scores: {scores > highestScores ? scores : highestScores}</h2>
      </div>
    </header>
    
     <div className='container'>
        <div className='box' onClick={touchBox}></div>
        <div className='box' onClick={touchBox}></div>
        <div className='box' onClick={touchBox}></div>
        <div className='box' onClick={touchBox}></div>
        <div className='box' onClick={touchBox}></div>
        <div className='box' onClick={touchBox}></div>
        <div className='box' onClick={touchBox}></div>
        <div className='box' onClick={touchBox}></div>
        <div className='box' onClick={touchBox}></div>
     </div>
    </>
  )
}

export default App
