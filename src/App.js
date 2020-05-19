import React from 'react';
import useGame from './useGame';

const App = () => {
  const { textareaRef, words, handleTextarea, gameStarted, countdownTimer, handleStartGame, numWords } = useGame();
  
  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea
        ref={ textareaRef }
        value={ words }
        onChange={ handleTextarea }
        disabled={ !gameStarted }
      />
      <h4>Time Remaining: { countdownTimer }</h4>
      <button
        onClick={ handleStartGame }
        disabled={ gameStarted }>
          Start!
      </button>
      <h1>Word Count: { numWords }</h1>
    </div>
  );
}

export default App;