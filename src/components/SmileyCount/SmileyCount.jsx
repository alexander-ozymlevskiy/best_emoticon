import React, { useState } from 'react';
import './Count.css';

// Оголошуємо компонент SmileyCount, який приймає props (emoji і onVote)
function SmileyCount({ emoji, onVote }) {
  // Встановлюємо початковий стан count
  const [count, setCount] = useState(0);

  // Функція, яка викликається при кліку на смайлик
  const smileyClick = () => {
    setCount(count + 1);
    onVote(emoji, count + 1);
  };

  return (
    <div className="smiley-container">
      <div>{emoji}</div>
      <p className="counter">{count}</p>
      <button className='btn' onClick={smileyClick}>Голосувати</button>
    </div>
  );
}

export default SmileyCount;