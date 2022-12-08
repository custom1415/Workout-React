import React, { useState } from "react";
import { TimerContainer, Stats, BtnContainer, CtrlBtn } from "./styles.timer";
export const TimerComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [Hour, setHour] = useState(0);

  const a = Math.floor((time / 60000) % 60);
  React.useEffect(() => {
    console.log(a);
    if (a >= 59) {
      setHour((prev) => prev + 1);
    }
  }, [a]);
  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
    setHour(0);
  };

  return (
    <TimerContainer>
      <Stats>
     
          <span>{("0" + Hour).slice(-2)}</span>

          <span>:</span>

          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>

          <span>:</span>

          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>

          <span>:</span>

          <span> {("0" + ((time / 10) % 100)).slice(-2)}</span>
      
      </Stats>
      <BtnContainer>
        <CtrlBtn onClick={handleStart}>Start</CtrlBtn>
        <CtrlBtn onClick={handlePauseResume}>Stop</CtrlBtn>
        <CtrlBtn onClick={handleReset}>Reset</CtrlBtn>
        <CtrlBtn>Rest</CtrlBtn>
      </BtnContainer>
    </TimerContainer>
  );
};
