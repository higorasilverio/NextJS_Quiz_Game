import Link from "next/link";
import { SyntheticEvent, useCallback } from "react";
import styles from "styles/Button.module.css";

type ButtonProps = {
  text: string;
  href?: string;
  onClick?: (e: SyntheticEvent) => void;
};

const Button = ({ text, href, onClick }: ButtonProps) => {
  const renderButton = useCallback(
    () => (
      <div className={styles.button} onClick={onClick}>
        {text}
      </div>
    ),
    [onClick, text]
  );

  return href ? (
    <Link href={href} passHref>
      {renderButton()}
    </Link>
  ) : (
    renderButton()
  );
};

export default Button;
