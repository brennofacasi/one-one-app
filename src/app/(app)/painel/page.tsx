import { Card } from "@/components/Card";
import styles from "./styles.module.scss";

import { Header } from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painel",
};

export default async function Home() {
  return (
    <>
      <Header.Topbar />

      <section className={styles.row}>
        <Card newClass={styles.card}>
          <div className={styles.inside}>
            <h6>Agendamentos</h6>
            <p className={styles.number}>12</p>
          </div>
        </Card>

        <Card newClass={styles.card}>
          <div className={styles.inside}>
            <h6>Mentores</h6>
            <p className={styles.number}>4</p>
          </div>
        </Card>

        <Card newClass={styles.card}>
          <div className={styles.inside}>
            <h6>Mentorandos</h6>
            <p className={styles.number}>15</p>
          </div>
        </Card>
      </section>
    </>
  );
}
