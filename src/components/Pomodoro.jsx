import Tomato from "../img/tomato.svg";
import "../css/main.css"

export default function Pomodoro() {
  return (
    <>
      <div className="wrapper">
        <h1>Pomodoro Counter</h1>
        <img src={Tomato} alt="tomato-image" width="200" height="200" />
        <p>This is going to be the coolest app in the world!</p>
      </div>
    </>
  );
}
