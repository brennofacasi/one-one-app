"use client";

import { useFetch } from "@/hooks/useFetch";
import styles from "./styles.module.scss";

import Modal from "@/components/Modal";
import plus from "@/icons/plus.svg";

import { States } from "@/components/States";
import MentorCard from "./components/MentorCard";
import { MentorCardProps } from "./components/MentorCard/types";
import CreateOrEditMentor from "./components/CreateOrEditMentor";

export default function Mentors() {
  const { data, error, isLoading, mutate } = useFetch("mentor");

  if (isLoading) return <States.Loading />;
  if (error) return <States.NotOk />;

  return (
    <>
      <Modal icon={plus} buttonContent='Criar mentor' primary small>
        <div className={styles.modal}>
          <CreateOrEditMentor mutate={mutate} />
        </div>
      </Modal>

      {data.mentors.length !== 0 ? (
        <section className={styles.row}>
          {data.mentors.map((mentor: MentorCardProps) => (
            <MentorCard key={mentor.id} data={mentor} mutate={mutate} />
          ))}
        </section>
      ) : (
        <div className={styles.empty}>
          <p>Ninguém ainda. Que tal criar um mentor?</p>
        </div>
      )}
    </>
  );
}
