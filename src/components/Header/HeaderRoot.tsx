import { Card } from "../Card";
import styles from "./styles.module.scss";

export const HeaderRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card>
      <div className={styles.header__inside}>{children}</div>
    </Card>
  );
};
