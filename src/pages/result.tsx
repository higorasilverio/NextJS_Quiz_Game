import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Statistic, Statement, Button } from "src/components";
import styles from "styles/Result.module.css";

export default function Result() {
  const router = useRouter();

  const [total, setTotal] = useState<number>(0);
  const [correct, setCorrect] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    if (router.query.total && router.query.correct) {
      const totalCount = +router.query.total;
      setTotal(totalCount);
      const correctCount = +router.query.correct;
      setCorrect(correctCount);
      const percentage = Math.round((correctCount / totalCount) * 100);
      setPercentage(percentage);
    }
  }, [router.query]);

  return (
    <div className={styles.result}>
      {total === 0 ? (
        <Statement text="Loading Results..." />
      ) : (
        <div className={styles.presentation}>
          <h1>Final Result</h1>
          <div style={{ display: "flex" }}>
            <Statistic value={total} text="Questions" />
            <Statistic value={correct} text="Correct" bgColor="#9cd2a4" />
            <Statistic
              value={`${percentage}%`}
              text="Percentage"
              bgColor="#de6a33"
            />
          </div>
          <Button text="Try Again" href="/" />
        </div>
      )}
    </div>
  );
}
