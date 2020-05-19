import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const TIMER_INIT = 5;
  const WORDS_INIT = '';

  const [ words, setWords ] = useState(WORDS_INIT);
  const [ numWords, setNumWords ] = useState(0);
  const [ countdownTimer, setCountdownTimer ] = useState(TIMER_INIT);
  const [ gameStarted, setGameStarted ] = useState(false);

  const textareaRef = useRef(null);

  useEffect(() => {
    if(gameStarted && countdownTimer === TIMER_INIT)
      textareaRef.current.focus();

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
    const count = text.split(' ');

    return count.filter(word => word !== '').length;
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