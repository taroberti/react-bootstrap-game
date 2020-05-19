import React, { useState, useEffect } from 'react';

const App = () => {
  const [ words, setWords ] = useState('');
  const [ countdownTimer, setCountdownTimer ] = useState(5);
  const [ gameStarted, setGameStarted ] = useState(false);

  useEffect(() => {
    if(gameStarted && countdownTimer > 0) {
      setTimeout(() => {
        setCountdownTimer(time => time - 1);
      }, 1000);
    } else if (countdownTimer === 0) {
      setGameStarted(false);
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
  }

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea value={ words } onChange={ handleTextarea } />
      <h4>Time Remaining: { countdownTimer }</h4>
      <button onClick={ handleStartGame }>Start!</button>
      <h1>Word Count: { wordCount(words) }</h1>
    </div>
  );
}

export default App;