import styles from "./styles.module.scss";

export default function Columns({ children }: { children: React.ReactNode }) {
  return <section className={styles.columns}>{children}</section>;
}
