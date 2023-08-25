import React, { useState } from "react";
import "./App.css";
import SmileyCount from "./components/SmileyCount";
import ShowResultButton from "./components/ShowResultButton";

const emojis = ["😀", "😁", "😂", "🤣", "😃"];  // Масив смайликів

function App() {
  const [votes, setVotes] = useState({}); // Стан для збереження голосів

  // Функція для оновлення голосів після кліку на смайлик
  const handleVote = (emoji, newCount) => {
    setVotes(prevVotes => ({ ...prevVotes, [emoji]: newCount }));
  };  

  // Функція для визначення смайлика з найбільшою кількістю голосів
  const showResult = () => {
    const emojisWithVotes = emojis.filter(emoji => votes[emoji] > 0); 
    const sortedEmojis = emojisWithVotes.sort((a, b) => votes[b] - votes[a]);  
    const maxVotesEmoji = sortedEmojis[0];
  
    return maxVotesEmoji;
  };

  return (
    <div>
      <h1 className="header">Голосування за найкращий смайлик</h1>
      <div className="smiley">
        {emojis.map((emoji, x) => (
          <SmileyCount key={x} emoji={emoji} onVote={handleVote} />
        ))}
      </div>
      <div className="button-container">
        <ShowResultButton winner={showResult()} />
      </div>
    </div>
  );
}

export default App;