import React, { useState } from "react";
import "./App.css";
import SmileyCount from "./components/SmileyCount";
import ShowResultButton from "./components/ShowResultButton";

const emojis = ["😀", "😁", "😂", "🤣", "😃"];

function App() {
  const [votes, setVotes] = useState({});
  const [showResult, setShowResult] = useState(false);

  const updateVoteCount = (emoji, newCount) => {
    setVotes(prevVotes => ({ ...prevVotes, [emoji]: newCount }));
  };

  const onShowResultClick = () => {
    setShowResult(true);
  };

  const calculateWinner = () => {
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
          <SmileyCount key={x} emoji={emoji} onVote={updateVoteCount} />
        ))}
      </div>
      <div className="button-container">
        <ShowResultButton onShowResultClick={onShowResultClick} />
        {showResult && <p>Переможець: {calculateWinner()}</p>}
      </div>
    </div>
  );
}

export default App;
