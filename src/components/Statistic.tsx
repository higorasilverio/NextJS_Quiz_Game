import styles from "styles/Statistic.module.css";

type StatisticProps = {
  value: any;
  text: string;
  bgColor?: string;
  fontColor?: string;
};

const Statistic = ({ value, text, bgColor, fontColor }: StatisticProps) => {
  return (
    <div className={styles.statistic}>
      <div
        className={styles.value}
        style={{
          backgroundColor: bgColor ?? "#fdd60f",
          color: fontColor ?? "#333",
        }}
      >
        {value}
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Statistic;
