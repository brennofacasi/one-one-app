import SkillCard from "@/components/SkillCard";
import styles from "./styles.module.scss";
import { fetchApi } from "@/services/fetch";
import { Header } from "@/components/Header";

async function getSkills() {
  const res = await fetchApi("skill");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Skills() {
  const data: SkillCardProps[] = await getSkills();

  return (
    <>
      <Header.Topbar />
      <Header.Root>
        <h2>Habilidades</h2>
      </Header.Root>
      <section className={styles.row}>
        {data.map((skill) => (
          <SkillCard key={skill.id} data={skill} />
        ))}
      </section>
    </>
  );
}
