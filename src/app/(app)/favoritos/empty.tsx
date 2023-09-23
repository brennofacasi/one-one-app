import { Card } from "@/components/Card";
import styles from "./empty.module.scss";
import Image from "next/image";

import joystickBig from "@/icons/joystick-big.svg";

export default function Empty() {
  return (
    <Card>
      <div className={styles.empty}>
        <Image src={joystickBig} alt='Ícone de nada encontrado' />
        <h2>Oops!</h2>
        <p>Você não tem nenhum fav ainda.</p>
        <p>Escolha alguns!</p>
      </div>
    </Card>
  );
}
