import { useEffect, useState } from "react";

export default function Counter({ seconds }) {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(seconds)


  useEffect(() => {
    if (!timeLeft) return;
    if (isActive) {
      const intervalId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000)
      return () => clearInterval(intervalId)
    }
  }, [timeLeft])

  return (
    <>
      <div className="wrapper">
        <div className="counter">{timeLeft}</div>
        <button onClick={() => setIsActive(true)} id="start" className="button">Start</button>
        <button id="reset" className="button">Reset</button>
        <button id="stop" className="button">Stop</button>
      </div>
    </>
  );
}
