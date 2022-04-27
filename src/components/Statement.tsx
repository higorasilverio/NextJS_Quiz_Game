import styles from "styles/Statement.module.css";

type StatementProps = {
  text: string;
};

const Statement = ({ text }: StatementProps) => {
  return (
    <div className={styles.statement}>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Statement;
