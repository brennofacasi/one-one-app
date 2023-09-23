import { Header } from "@/components/Header";
import styles from "../jogos/styles.module.scss";

import FavoriteGames from "./games";

export default function Games() {
  return (
    <>
      <section className={styles.games}>
        <Header.Topbar />
        <Header.Root>
          <h2>Favoritos</h2>
        </Header.Root>
        <FavoriteGames />
      </section>
    </>
  );
}
