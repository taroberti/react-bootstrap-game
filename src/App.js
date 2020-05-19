import React, { useState, useEffect } from 'react';

const App = () => {
  const TIMER_INIT = 5;
  const WORDS_INIT = '';
  
  const [ words, setWords ] = useState(WORDS_INIT);
  const [ numWords, setNumWords ] = useState(0);
  const [ countdownTimer, setCountdownTimer ] = useState(TIMER_INIT);
  const [ gameStarted, setGameStarted ] = useState(false);

  useEffect(() => {
    if(gameStarted && countdownTimer > 0) {
      setTimeout(() => {
        setCountdownTimer(time => time - 1);
      }, 1000);
    } else if (countdownTimer === 0) {
      handleEndGame();
    }
  }, [ countdownTimer, gameStarted ]);

  const handleTextarea = event => {
    setWords(event.target.value);
  }

  const wordCount = text => {
    if(text === '')
      return 0;

    return text.trim().split(' ').length;
  }

  const handleStartGame = () => {
    setGameStarted(true);
    setCountdownTimer(TIMER_INIT);
    setWords(WORDS_INIT);
  }

  const handleEndGame = () => {
    setGameStarted(false);
    setNumWords(wordCount(words));
  }

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea 
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