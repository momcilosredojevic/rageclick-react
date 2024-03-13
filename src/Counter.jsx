import { useEffect, useState } from "react";

export function Counter() {
  const [numOfSecondsLeft, setNumOfSecondsLeft] = useState(10);
  const [numOfClicks, setNumOfClicks] = useState(0);
  const [timerActive, setTimerActive] = useState(false);

  function handleClick() {
    if (!timerActive) {
      setTimerActive(true);
    }
    if (numOfSecondsLeft > 0) {
      setNumOfClicks((numOfClicks) => numOfClicks + 1);
    }
  }

  useEffect(() => {
    if (timerActive && numOfSecondsLeft > 0) {
      setTimeout(() => setNumOfSecondsLeft(numOfSecondsLeft - 1), 1000);
    }
  }, [numOfSecondsLeft, timerActive]);

  return (
    <center>
      <div>
        <h1 className="header">Rage Click Counter</h1>
        <div className="count">
          You clicked me {numOfClicks} times in 10 seconds!
        </div>
        <button className="btncount" onClick={handleClick}>
          Count
        </button>
        <div className="counter">{numOfSecondsLeft}</div>
      </div>
    </center>
  );
}
