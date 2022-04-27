import styles from "styles/Answer.module.css";
import { AnswerModel } from "src/model";

type AnswerProps = {
  answer: AnswerModel;
  index: number;
  letter: string;
  bgLetterColor: string;
  onResponse: (index: number) => void;
};

const Answer = ({
  answer,
  index,
  letter,
  bgLetterColor,
  onResponse,
}: AnswerProps) => {
  const { value: textualValue } = answer;
  const revealedAnswer = answer.revealed ? styles.revealedAnswer : "";

  return (
    <div className={styles.answer} onClick={() => onResponse(index)}>
      <div className={`${revealedAnswer} ${styles.content}`}>
        <div className={styles.front}>
          <div
            className={styles.letter}
            style={{ backgroundColor: bgLetterColor }}
          >
            {letter}
          </div>
          <div className={styles.value}>{textualValue}</div>
        </div>
        <div className={styles.back}>
          {answer.right ? (
            <div className={styles.right}>
              <div>Correct answer!</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          ) : (
            <div className={styles.wrong}>
              <div>The answer provided is wrong...</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Answer;
