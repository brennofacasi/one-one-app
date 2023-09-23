import { Card } from "@/components/Card";
import styles from "./styles.module.scss";
import Image from "next/image";
import Hero from "./hero";
import { Header } from "@/components/Header";
import { fetchApi } from "@/services/fetch";
import Link from "next/link";

async function getGames() {
  const res = await fetchApi("game");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const games: GameCardProps[] = await getGames();

  return (
    <>
      <Header.Topbar />
      <Hero />
      <Card>
        <section className={styles.recent}>
          <h5>Jogos recentes</h5>
          <div className={styles.recent__row}>
            {games
              .map((game) => (
                <Link key={game.id} href={`/jogos/${game.id}`}>
                  <Image
                    width={960}
                    height={540}
                    src={game.image}
                    alt='Empresa de Participação'
                  />
                  <h6>{game.title}</h6>
                </Link>
              ))
              .slice(0, 3)}
          </div>
        </section>
      </Card>
    </>
  );
}
