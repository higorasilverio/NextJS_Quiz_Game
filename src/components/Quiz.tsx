import { useCallback } from "react";
import { Question, Button } from "src/components";
import { QuestionModel } from "src/model";
import styles from "styles/Quiz.module.css";

type QuizProps = {
  question: QuestionModel;
  lastOne: boolean;
  timeToAnswer?: number;
  answeredQuestion: (question: QuestionModel) => void;
  goToNextStep: () => void;
};

const Quiz = ({
  question,
  lastOne,
  timeToAnswer,
  answeredQuestion,
  goToNextStep,
}: QuizProps) => {
  const providedAnswer = useCallback(
    (index: number) => {
      if (question.notAnswered) answeredQuestion(question.anwswerWith(index));
    },
    [answeredQuestion, question]
  );

  return (
    <div className={styles.quiz}>
      <Question
        value={question}
        timeToAnswer={timeToAnswer ?? 8}
        onResponse={providedAnswer}
        outOfTime={goToNextStep}
      />
      <Button
        text={lastOne ? "Finish Quiz" : "Next Question"}
        onClick={goToNextStep}
      />
    </div>
  );
};

export default Quiz;
