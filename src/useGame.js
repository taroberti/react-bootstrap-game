import { useState, useEffect, useRef } from 'react';

const useGame = (wordsDefault = '', timerDefault = 5) => {
  const [ words, setWords ] = useState(wordsDefault);
  const [ numWords, setNumWords ] = useState(0);
  const [ countdownTimer, setCountdownTimer ] = useState(timerDefault);
  const [ gameStarted, setGameStarted ] = useState(false);

  const textareaRef = useRef(null);

  useEffect(() => {
    if(gameStarted && countdownTimer === timerDefault)
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
    setCountdownTimer(timerDefault);
    setWords(wordsDefault);
  }

  const handleEndGame = () => {
    setGameStarted(false);
    setNumWords(wordCount(words));
  }

  return { textareaRef, words, handleTextarea, gameStarted, countdownTimer, handleStartGame, numWords };
}

export default useGame;