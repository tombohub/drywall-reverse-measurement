import { useEffect, useRef, useState } from "react";
import { submitAnswer } from "../store/gameSlice";
import { useAppDispatch, useAppSelector } from "../store";

export function useCountdown() {
  const [seconds, setSeconds] = useState(5);
  const secondsRef = useRef(seconds);
  const dispatch = useAppDispatch();
  const questionStatus = useAppSelector(state => state.question.status);
  const questionNumber = useAppSelector(state => state.game.questionNumber);

  useEffect(() => {
    setSeconds(5);
  }, [questionNumber]);

  useEffect(() => {
    let intervalId: number;
    if (questionStatus === "active") {
      intervalId = setInterval(() => {
        setSeconds(prev => {
          secondsRef.current = prev - 1;
          return secondsRef.current;
        });
        if (secondsRef.current === 1) {
          clearInterval(intervalId);
          dispatch(submitAnswer(null));
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [questionStatus, dispatch]);

  return seconds;
}
