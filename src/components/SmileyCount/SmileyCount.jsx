import React, { useState } from 'react';
import './Count.css';

function SmileyCount({ emoji, onVote }) {
  const [count, setCount] = useState(0);

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
