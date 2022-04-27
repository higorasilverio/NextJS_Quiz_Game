import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { Button, Selector } from "src/components";
import styles from "styles/Home.module.css";

const QUIZ_PARAMS = [
  { id: 0, value: "easy", bgColor: "#9cd2a4", time: 10, questions: "5" },
  { id: 1, value: "medium", bgColor: "#fdd60f", time: 8, questions: "10" },
  { id: 2, value: "hard", bgColor: "#df4759", time: 6, questions: "15" },
];

enum SettingParam {
  LVL = "LEVEL",
  QUEST = "QUESTIONS",
}

enum ControlParam {
  DEC = "DECREASE",
  INC = "INCREASE",
}

export default function Home() {
  const router = useRouter();

  const [level, setLevel] = useState<number>(0);
  const [questionsCount, setQuestionsCount] = useState<number>(0);

  const setParams = useCallback((set: SettingParam, deal: ControlParam) => {
    const lastIndex = deal === ControlParam.DEC ? 0 : 2;
    const firstIndex = deal === ControlParam.DEC ? 2 : 0;

    set === SettingParam.LVL
      ? setLevel((curr) => {
          const nextIndex = deal === ControlParam.DEC ? curr - 1 : curr + 1;
          return curr === lastIndex ? firstIndex : nextIndex;
        })
      : setQuestionsCount((curr) => {
          const nextIndex = deal === ControlParam.DEC ? curr - 1 : curr + 1;
          return curr === lastIndex ? firstIndex : nextIndex;
        });
  }, []);

  const startQuiz = useCallback(() => {
    router.push({
      pathname: "/quiz",
      query: {
        level: QUIZ_PARAMS[level].time,
        questions: QUIZ_PARAMS[questionsCount].questions,
      },
    });
  }, [level, questionsCount, router]);

  return (
    <div className={styles.home}>
      <h1>Quiz Setup</h1>
      <Selector
        decreaseValue={() => setParams(SettingParam.LVL, ControlParam.DEC)}
        increaseValue={() => setParams(SettingParam.LVL, ControlParam.INC)}
        bgColor={QUIZ_PARAMS[level].bgColor}
        value={QUIZ_PARAMS[level].value}
      />
      <Selector
        decreaseValue={() => setParams(SettingParam.QUEST, ControlParam.DEC)}
        increaseValue={() => setParams(SettingParam.QUEST, ControlParam.INC)}
        bgColor={QUIZ_PARAMS[questionsCount].bgColor}
        value={QUIZ_PARAMS[questionsCount].questions}
      />
      <Button text="Start Quiz" onClick={startQuiz} />
    </div>
  );
}
