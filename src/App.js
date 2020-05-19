import React, { useState, useEffect } from 'react';

const App = () => {
  const [ words, setWords ] = useState('');
  const [ countdownTimer, setCountdownTimer ] = useState(15);

  useEffect(() => {
    if(countdownTimer > 0) {
      setTimeout(() => {
        setCountdownTimer(time => time - 1);
      }, 1000);
    }
  }, [ countdownTimer ]);

  const handleTextarea = event => {
    setWords(event.target.value);
  }

  const wordCount = text => {
    if(text === '')
      return 0;

    return text.trim().split(' ').length;
  }

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea value={ words } onChange={ handleTextarea } />
      <h4>Time Remaining: { countdownTimer }</h4>
      <button>Start!</button>
      <h1>Word Count: { wordCount(words) }</h1>
    </div>
  );
}

export default App;