import { useEffect, useState } from "react";
import './App.css'

const api_key = 'laHIensPNJJWt1WjpjtJEBBIjQFsJxGP';

export default function Fetch({touchCard, handleScores}) {
  const [cards, setCards] = useState([]);
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=bts&limit=12`)
      .then((res) =>  res.json())
      .then((data) => {
        const gifs = data.data.map((gif) => ({
            id: gif.id,
            img: gif.images.downsized.url,
        }));
        setCards(gifs);
      })
      .catch((err) => console.error("Error fetching Giphy data", err));
  }, []);

  useEffect(() => {
    if (clicked.length === 0 && cards.length > 0) {
      const reshuffled = [...cards].sort(() => Math.random() - 0.5);
      setCards(reshuffled);
    }
  }, [clicked]);


  function handleCardClick(card) {
    if (clicked.includes(card.id)) {
      setClicked([]);
      handleScores('Game Over!');
      return;
    }

    touchCard();

    setClicked((prev) => [...prev, card.id]);

    const newCards = [...cards].sort(() => Math.random() - 0.5);
    setCards(newCards);
  }

  return (
    <div className="grid">
      {cards.map((card) => (
        <img 
          key={card.id} 
          src={card.img} 
          alt="gif" 
          className="card" 
          onClick={() => handleCardClick(card)} />
      ))}
    </div>
  );
};
