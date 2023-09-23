import Link from "next/link";
import Modal from "../Modal";
import styles from "./styles.module.scss";

export default function SkillCard({ data }: { data: SkillCardProps }) {
  return (
    <div className={styles.body}>
      <h6>{data.name}</h6>
      <span className={styles.number}>
        {data.games?.length} {data.games?.length > 1 ? "jogos" : "jogo"}
      </span>
      <footer className={styles.footer}>
        <Modal btnContent='Ver detalhes'>
          <div className={styles.modal}>
            <h3 className={styles.modal__title}>{data.name}</h3>

            <h5>O que é?</h5>
            <p>{data.description}</p>

            <h5>Jogos</h5>
            <ul className={styles.modal__list}>
              {data.games.map((item) => (
                <Link
                  key={item.games.id}
                  href={`/jogos/${item.games.id}`}
                  passHref
                >
                  <li>{item.games.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        </Modal>
      </footer>
    </div>
  );
}
