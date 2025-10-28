import { useEffect, useState } from "react";
import './App.css'

const api_key = 'laHIensPNJJWt1WjpjtJEBBIjQFsJxGP';

export default function Fetch({touchCard}) {
  const [cards, setCards] = useState([]);

  function handleCardClick() {
    const newCards = [...cards];
    newCards.sort(() => Math.random() - 0.5);
    setCards(newCards);
  }

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

  return (
    <div className="grid">
      {cards.map((card) => (
        <img key={card.id} src={card.img} alt="gif" className="card" onClick={handleCardClick}/>
      ))}
    </div>
  );
};

