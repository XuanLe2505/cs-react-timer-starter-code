import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const [splitList, setSplitList] = useState([]);
  const [isStart, setIsStart] = useState(false);
  const active = useRef();
  const activeSplit = useRef();
  const refInterval = useRef();

  const startTimer = () => {
    setIsStart(!isStart);
    refInterval.current = setInterval(() => {
      setTime((second) => second + 1);
    }, 1000);
    active.current.disabled = true;
    activeSplit.current.disabled = false;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    active.current.disabled = false;
    activeSplit.current.disabled = true;
  };
  const resetTimer = () => {
    setIsStart(isStart);
    clearInterval(refInterval.current);
    setTime(0);
    setSplitList([]);
    active.current.disabled = false;
  };

  const splitTimer = () => {
    addSplitValue("Split");
  };
  const addSplitValue = (reason) => {
    setSplitList((split) => [...split, { time, reason }]);
  };

  const isReset = time === 0;

  return {
    time,
    isReset,
    startTimer,
    stopTimer,
    resetTimer,
    active,
    activeSplit,
    splitTimer,
    splitList,
  };
};
export default useTimer;
