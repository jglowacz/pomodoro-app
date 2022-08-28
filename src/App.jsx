import Pomodoro from "/src/components/Pomodoro";
import Counter from "/src/components/Counter"

export default function App() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 25 * 60);
  return (
    <>
      <Pomodoro />
      <Counter expiryTimestamp={time}/>
    </>
  );
}
