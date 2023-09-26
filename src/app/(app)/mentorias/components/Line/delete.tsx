import { Button } from "@/components/forms/Button";
import { clientApi } from "@/services/fetch";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";
import { useModalContext } from "@/components/Modal";

export default function DeleteMeeting({
  id,
  mutate,
}: {
  id: string;
  mutate: () => void;
}) {
  const { closeModal } = useModalContext();
  const deleteMeeting = () => {
    clientApi
      .delete(`meeting/${id}`)
      .then(() => {
        closeModal();
        mutate();
        toast.success("Mentoria deletada.");
      })
      .catch((e) => toast.error(e.message));
  };

  return (
    <section className={styles.delete}>
      <h4>Você tem certeza?</h4>
      <p>O horário dessa mentoria ficará disponível para marcação.</p>
      <Button onClick={deleteMeeting} center danger>
        Deletar mentoria
      </Button>
    </section>
  );
}
