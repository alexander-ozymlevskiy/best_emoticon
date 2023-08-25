import React from "react";
import "./Button.css";

// Оголошуємо компонент ShowResultButton з пропсом winner
function ShowResultButton({ winner }) {
  // Функція, яка спрацьовує при кліку на кнопку
  const showResultClick = () => {
    if (winner) {
      alert(`Переможець: ${winner}`);
    } else {
      alert("Поки немає голосів");
    }
  };

  return (
    <div>
      <button className="showResultBtn" onClick={showResultClick}>
        Показати результат
      </button>
    </div>
  );
}

export default ShowResultButton;