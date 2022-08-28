import Pomodoro from "/src/components/Pomodoro";
import Counter from "/src/components/Counter"

export default function App() {
  return (
    <>
      <Pomodoro />
      <Counter seconds={5}/>
    </>
  );
}
