import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [colors, setColors] = useState(Array(9).fill('white'));
  const [clickSequence, setClickSequence] = useState([]);

  // Handles the click event for each box, changes its color to green, and tracks the click sequence
  const handleClick = (index) => {
    if (colors[index] === 'white') {
      const newColors = [...colors];
      newColors[index] = 'green';
      setColors(newColors);

      const newSequence = [...clickSequence, index];
      setClickSequence(newSequence);

      if (newSequence.length === 9) {
        setTimeout(() => changeToOrangeInSequence(newSequence), 500);
      }
    }
  };

  // Changes the colors of all boxes to orange sequentially with a delay
  const changeToOrangeInSequence = (sequence) => {
    sequence.forEach((idx, i) => {
      setTimeout(() => {
        setColors((prevColors) => {
          const newColors = [...prevColors];
          newColors[idx] = 'orange';
          return newColors;
        });
      }, i * 500);
    });
  };

  // Resets the grid by setting all boxes back to white and clearing the click sequence
  const resetMatrix = () => {
    setColors(Array(9).fill('white'));
    setClickSequence([]);
  };

  return (
    <div className="container">
      <div className="box">
        <div className="grid">
          {colors.map((color, index) => (
            <div
              key={index}
              className="matrix-box"
              style={{ backgroundColor: color }}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        <p className="text">Click all the boxes to change them to orange one by one!</p>
        <button className="reset-button" onClick={resetMatrix}>Reset Matrix</button>
      </div>
    </div>
  );
};

export default App;
