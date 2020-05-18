import React, { useState } from 'react';

const App = () => {
  const [ words, setWords ] = useState('');

  const handleTextarea = event => {
    setWords(event.target.value);
  }

  return (
    <div>
      <h1>Speed Typing Game</h1>
      <textarea value={ words } onChange={ handleTextarea }/>
      <h4>Time Remaining:</h4>
      <button>Start!</button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;