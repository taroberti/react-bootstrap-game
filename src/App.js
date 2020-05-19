import React, { useState } from 'react';

const App = () => {
  const [ words, setWords ] = useState('');

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
      <h4>Time Remaining:</h4>
      <button>Start!</button>
      <h1>Word Count: { wordCount(words) }</h1>
    </div>
  );
}

export default App;