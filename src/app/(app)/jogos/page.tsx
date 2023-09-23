import { fetchApi } from "@/services/fetch";

import styles from "./styles.module.scss";

import { GameCard } from "@/components/GameCard";
import { Header } from "@/components/Header";

async function getGames() {
  const res = await fetchApi("game");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Games() {
  const data: GameCardProps[] = await getGames();

  return (
    <>
      <Header.Topbar />
      <Header.Root>
        <h2>Jogos</h2>
      </Header.Root>
      <section className={styles.row}>
        {data.map((game) => (
          <GameCard key={game.id} data={game} />
        ))}
      </section>
    </>
  );
}
