import { useTimer } from 'react-timer-hook';

export default function Counter({ expiryTimestamp }) {
  const { seconds,
    minutes,
    isRunning,
    start,
    pause,
    restart,
  } = useTimer({ expiryTimestamp, autoStart: false, onExpire: () => console.warn('onExpire called') })

  return (
    <>
      <div className="wrapper">
        <div className="counter"><span>{minutes}:{seconds < 10 ? '0' + seconds : seconds}</span></div>
        <div className="button-container">
          <button onClick={start} id="start" className="button">Start</button>
          <button onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 25 * 60);
            restart(time)
          }} id="reset" className="button">Restart</button>
          <button onClick={pause} id="pause" className="button">Pause</button>
        </div>
      </div>
    </>
  );
}
