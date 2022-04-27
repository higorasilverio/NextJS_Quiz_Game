import styles from "styles/Question.module.css";
import { QuestionModel } from "src/model";
import { Statement, Answer, Timer } from ".";
import { useCallback } from "react";

const LETTERS = [
  { value: "A", color: "#f2c866" },
  { value: "B", color: "#f266ba" },
  { value: "C", color: "#85d4f2" },
  { value: "D", color: "#bce596" },
];

type QuestionProps = {
  value: QuestionModel;
  timeToAnswer?: number;
  onResponse: (index: number) => void;
  outOfTime: () => void;
};

const Question = ({
  value,
  timeToAnswer,
  onResponse,
  outOfTime,
}: QuestionProps) => {
  const renderAnswers = useCallback(
    () =>
      value.answers.map((answer, i) => (
        <Answer
          key={`${i}-${value.id}`}
          index={i}
          answer={answer}
          letter={LETTERS[i].value}
          bgLetterColor={LETTERS[i].color}
          onResponse={onResponse}
        />
      )),
    [onResponse, value]
  );

  return (
    <div className={styles.question}>
      <Statement text={value.question} />
      <Timer
        duration={timeToAnswer ?? 10}
        outOfTime={outOfTime}
        key={value.id}
      />
      {renderAnswers()}
    </div>
  );
};

export default Question;
