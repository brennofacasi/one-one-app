import { formatDate } from "@/utils/formatDate";
import styles from "./styles.module.scss";
import { MentorCardProps } from "./types";
import edit from "@/icons/edit.svg";
import Modal from "@/components/Modal";
import AvailabilitiesModal from "../AvailabilitiesModal";
import CreateOrEditMentor from "../CreateOrEditMentor";

export default function MentorCard({
  data,
  mutate,
}: {
  data: MentorCardProps;
  mutate: () => void;
}) {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.edit__button}>
          <Modal icon={edit} small>
            <CreateOrEditMentor mutate={mutate} initialData={data} />
          </Modal>
        </div>

        <h5>
          {data.first_name} {data.last_name}
        </h5>
        <p>{data.email}</p>
        <small>Adicionado em {formatDate(data.created_at, "dd/MM/yyyy")}</small>
      </div>

      <Modal buttonContent='Ver disponibilidade' primary>
        <AvailabilitiesModal name={data.first_name} id={data.id} />
      </Modal>
    </div>
  );
}
