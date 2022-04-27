import styles from "styles/Selector.module.css";

type SelectorProps = {
  decreaseValue: () => void;
  increaseValue: () => void;
  bgColor?: string;
  value: string;
};

const Selector = ({
  bgColor,
  decreaseValue,
  increaseValue,
  value,
}: SelectorProps) => {
  return (
    <div className={styles.selector}>
      <button className={styles.button} onClick={decreaseValue}>
        -
      </button>
      <span
        className={styles.value}
        style={{ backgroundColor: bgColor ?? "#56fd78" }}
      >
        {value}
      </span>
      <button className={styles.button} onClick={increaseValue}>
        +
      </button>
    </div>
  );
};

export default Selector;
