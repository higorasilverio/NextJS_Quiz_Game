import { useCallback } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "styles/Timer.module.css";

type TimerProps = {
  duration: number;
  outOfTime: () => void;
};

enum StepEnum {
  first = 1,
  second = 0.66,
  third = 0.45,
  fourth = 0,
}

const Timer = ({ duration, outOfTime }: TimerProps) => {
  const GetTimerStep = useCallback(
    (step: StepEnum) => Math.floor(duration * step),
    [duration]
  );

  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        size={120}
        isPlaying
        duration={duration}
        onComplete={outOfTime}
        colors={["#0f0", "#00f", "#ff0", "#f00"]}
        colorsTime={[
          GetTimerStep(StepEnum.first),
          GetTimerStep(StepEnum.second),
          GetTimerStep(StepEnum.third),
          GetTimerStep(StepEnum.fourth),
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
