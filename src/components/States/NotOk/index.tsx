import styles from "../styles.module.scss";
import errorJoystick from "@/icons/error.svg";
import Image from "next/image";

export default function NotOk() {
  return (
    <div className={styles.wrapper}>
      <Image src={errorJoystick} alt='Erro' />
    </div>
  );
}
