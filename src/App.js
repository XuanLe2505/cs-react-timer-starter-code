import { formatTime } from "./formatTime";
import useTimer from "./useTimer";
import "./App.css";

function App() {
  const {
    time,
    isReset,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    activeSplit,
    splitTimer,
    splitList,
  } = useTimer(0);

  return (
    <div className="App container">
      <h1>Coder Timer</h1>
      <div className="timer__wrapper">
        <div className="timer__display">
          <p>{formatTime(time)}</p>
        </div>
        <div className="button__wrapper">
          <button className="button" onClick={stopTimer}>
            Stop
          </button>
          <button className="button" ref={active} onClick={startTimer}>
            Start
          </button>
          <button className="button" onClick={resetTimer}>
            Reset
          </button>
          <button
            className="button"
            disabled={isReset}
            ref={activeSplit}
            onClick={splitTimer}
          >
            Split
          </button>
        </div>
      </div>
      {splitList.length > 0 && <hr />}
      <div className="split-list">
        {splitList.map(({ time, reason }, i) => {
          return (
            <div className="split-item" key={time}>
              <div>#{i + 1}</div>
              <div className="split">{formatTime(time)}</div>
              <div>{reason}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
