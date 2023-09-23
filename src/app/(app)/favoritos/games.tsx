"use client";

import { useEffect, useState } from "react";
import styles from "../jogos/styles.module.scss";
import { GameCard } from "@/components/GameCard";
import { clientFetch } from "@/services/fetch";
import Empty from "./empty";

export default function FavoriteGames() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    clientFetch.get("game?favorite=true").then((res) => setGames(res.data));
  }, []);

  if (games.length === 0) return <Empty />;

  return (
    <section className={styles.row}>
      {games.map((game: GameCardProps) => (
        <GameCard key={game.id} data={game} />
      ))}
    </section>
  );
}
