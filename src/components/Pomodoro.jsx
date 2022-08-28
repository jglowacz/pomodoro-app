import Tomato from "../img/tomato.svg";
import "../css/main.css"

export default function Pomodoro() {
  return (
    <>
      <div className="wrapper">
        <h1>Pomodoro Timer</h1>
        <img src={Tomato} alt="tomato-image" width="200" height="200" />
      </div>
    </>
  );
}
