import { useState } from 'react'
import './App.css'

function App() {
  return (
    <>
    <header>
      <h1>Memory Card</h1>
      <div id='scores'>
        <h2>Scores: </h2>
        <h2>Highest Scores: </h2>
      </div>
    </header>
    
     <div className='container'>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
        <div className='box'></div>
     </div>
    </>
  )
}

export default App
