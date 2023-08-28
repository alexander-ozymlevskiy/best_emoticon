import React from "react";
import "./Button.css";

function ShowResultButton({ onShowResultClick }) {
  return (
    <div>
      <button className="showResultBtn" onClick={onShowResultClick}>
        Показати результат
      </button>
    </div>
  );
}

export default ShowResultButton;