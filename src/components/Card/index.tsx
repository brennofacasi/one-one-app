import styles from "./styles.module.scss";
import classNames from "classnames";

interface CardProps {
  children: React.ReactNode;
  newClass?: string;
}

export const Card = ({ children, newClass }: CardProps) => {
  return (
    <div className={classNames(styles.card__body, newClass)}>{children}</div>
  );
};
