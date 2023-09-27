import { DotWave } from "@uiball/loaders";
import styles from "../styles.module.scss";

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <DotWave size={32} color='#181a1b' />
    </div>
  );
}
