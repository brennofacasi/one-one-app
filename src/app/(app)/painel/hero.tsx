import Image from "next/image";
import styles from "./styles.module.scss";
import hero from "@public/images/money.png";
import { Button } from "@/components/forms/Button";
import { Tag } from "@/components/Tag";
import Link from "next/link";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero__box}>
        <Tag>NOVO JOGO</Tag>
        <h1>Estimule negociação com&nbsp;o Ganha-Grana!</h1>
        <Link href='/jogos/4' passHref>
          <Button>Conheça o jogo</Button>
        </Link>
      </div>
      <Image src={hero} alt='Imagem destacada' />
    </div>
  );
}
