import { useEffect, useState } from "react";

export function Counter({ maxRange }) {
  const [counter, setCounter] = useState(maxRange);
  const [count, setCount] = useState(0);

  function pressCount() {
    if (counter < 10 && counter > 0) {
      setCount((currentCount) => currentCount + 1);
    }
  }

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  });

  return (
    <center>
      <div>
        <h1 className="header">Rage Click Counter</h1>
        <div className="count">You clicked me {count} times in 10 seconds!</div>
        <button className="btncount" onClick={pressCount}>
          Count
        </button>
        <div className="counter">{counter}</div>
      </div>
    </center>
  );
}
