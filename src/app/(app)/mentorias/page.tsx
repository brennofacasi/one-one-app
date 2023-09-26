"use client";

import { useFetch } from "@/hooks/useFetch";
import styles from "./styles.module.scss";

import Modal from "@/components/Modal";
import plus from "@/icons/plus.svg";
import Line from "./components/Line";

import { LineProps } from "./components/Line/types";
import { States } from "@/components/States";
import CreateMeeting from "./components/CreateMeeting";

export default function Meetings() {
  const { data, error, isLoading, mutate } = useFetch("meeting");

  if (isLoading) return <States.Loading />;
  if (error) return <States.NotOk />;

  return (
    <>
      <Modal icon={plus} buttonContent='Criar mentoria' primary>
        <div className={styles.modal}>
          <CreateMeeting mutate={mutate} />
        </div>
      </Modal>

      <section className={styles.row}>
        {data.map((item: LineProps) => (
          <Line key={item.id} data={item} mutate={mutate} />
        ))}
      </section>
    </>
  );
}
