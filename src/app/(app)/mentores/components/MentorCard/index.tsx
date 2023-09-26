import { formatDate } from "@/utils/formatDate";
import styles from "./styles.module.scss";
import { MentorCardProps } from "./types";
import { Button } from "@/components/forms/Button";
import Modal from "@/components/Modal";
import AvailabilitiesModal from "../AvailabilitiesModal";

export default function MentorCard({ data }: { data: MentorCardProps }) {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
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
