"use client";

import { useFetch } from "@/hooks/useFetch";
import styles from "./styles.module.scss";

import Modal from "@/components/Modal";
import plus from "@/icons/plus.svg";

import { States } from "@/components/States";
import MentorCard from "./components/MentorCard";
import { MentorCardProps } from "./components/MentorCard/types";

export default function Mentors() {
  const { data, error, isLoading, mutate } = useFetch("mentor");

  if (isLoading) return <States.Loading />;
  if (error) return <States.NotOk />;

  return (
    <>
      <Modal icon={plus} buttonContent='Criar mentor' primary>
        <div className={styles.modal}>
          {/* <CreateMeeting mutate={mutate} /> */}
        </div>
      </Modal>

      <section className={styles.row}>
        {data.mentors.map((mentor: MentorCardProps) => (
          <MentorCard key={mentor.id} data={mentor} />
        ))}
      </section>
    </>
  );
}
