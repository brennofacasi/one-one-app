import Image from "next/image";
import styles from "./styles.module.scss";

import users from "@/icons/user.svg";
import clock from "@/icons/clock.svg";
import { Tag } from "../Tag";
import Link from "next/link";
import { Favorite } from "./favorite";
import { Button } from "../forms/Button";

export const GameCard = ({ data }: { data: GameCardProps }) => {
  return (
    <div className={styles.body}>
      <Link href={`/jogos/${data.id}`}>
        <img
          className={styles.featured}
          src={data.image}
          alt='Imagem do jogo'
        />
      </Link>
      <header className={styles.header}>
        <h6 className={styles.header__title}>{data.title}</h6>
        <ul className={styles.header__info}>
          <li>
            <Image src={users} alt='Ícone de usuários' />
            {data.maxPlayers} players
          </li>
          <li>
            <Image src={clock} alt='Ícone de relógio' />
            {data.time} minutos
          </li>
        </ul>
      </header>

      {data.skills.map((skill) => (
        <Tag key={skill}>{skill}</Tag>
      ))}
      <footer className={styles.footer}>
        <div className={styles.buttons}>
          <Link href={`/jogos/${data.id}`} passHref>
            <Button>Ver jogo</Button>
          </Link>
          <Favorite gameId={data.id} />
        </div>
      </footer>
    </div>
  );
};
