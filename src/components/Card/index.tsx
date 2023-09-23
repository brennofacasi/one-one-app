import styles from "./styles.module.scss";

interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return <div className={styles.card__body}>{children}</div>;
};
