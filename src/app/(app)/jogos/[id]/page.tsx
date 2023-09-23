import Image from "next/image";
import HTMLReactParser from "html-react-parser";
import { fetchApi } from "@/services/fetch";

import styles from "./styles.module.scss";

import { Card } from "@/components/Card";

import user from "@/icons/user.svg";
import users from "@/icons/users.svg";
import clock from "@/icons/clock.svg";
import Columns from "./columns";
import { Header } from "@/components/Header";

async function getGame(id: string) {
  const res = await fetchApi(`game/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Game({ params }: { params: { id: string } }) {
  const game: GameProps = await getGame(params.id);

  console.log(game.image);
  return (
    <>
      <Header.Topbar />
      <Card>
        <div className={styles.game__detail}>
          <div className={styles.game__info}>
            <h2>{game.title}</h2>
            <ul>
              <li>
                <Image src={clock} alt='Ícone de relógio' />
                {game.time} minutos
              </li>
              <li>
                <Image src={user} alt='Ícone de usuário' />
                Até {game.maxGroups} {game.maxGroups > 1 ? "grupos" : "grupo"}
              </li>
              <li>
                <Image src={users} alt='Ícone de usuários' /> Até{" "}
                {game.maxPlayers} players
              </li>
            </ul>
          </div>
        </div>
      </Card>

      <img
        src={game.image}
        className={styles.game__image}
        alt={`Imagem do jogo ${game.title}`}
      />

      <Columns>
        <div>
          <Card>
            <article className={styles.article}>
              <h3 className='highlight'>O que é?</h3>
              {HTMLReactParser(game.steps)}
            </article>
          </Card>

          <Card>
            <div className={styles.assets}>
              <h4 className='highlight'>Materiais</h4>
              <div className={styles.assets__items}>
                {game.assets.map((asset: any) => (
                  <div key={asset}>{asset}</div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className={styles.skills}>
          {game.skills.map((skill: any) => (
            <div key={skill} className={styles.skills__box}>
              {skill}
            </div>
          ))}
        </div>
      </Columns>
    </>
  );
}
