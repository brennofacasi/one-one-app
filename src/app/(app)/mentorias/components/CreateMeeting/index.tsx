import { CreateMeetingProps } from "./types";
import { useForm } from "react-hook-form";
import { Button } from "@/components/forms/Button";
import styles from "./styles.module.scss";
import Select from "@/components/forms/Select";
import { MenteesSelect } from "./mentees";
import { MentorsSelect } from "./mentors";
import GetAvailability from "./get-availability";
import { clientApi } from "@/services/fetch";
import { useModalContext } from "@/components/Modal";
import { toast } from "react-toastify";

export default function CreateMeeting({ mutate }: CreateMeetingProps) {
  const { register, handleSubmit, watch, reset } = useForm();
  const { closeModal } = useModalContext();

  const onSubmit = (values: any) => {
    const { radio, ...data } = values;
    const dates = radio.split(";");

    const slot = {
      start_time: dates[0],
      end_time: dates[1],
    };

    clientApi
      .post("meeting/", {
        ...data,
        slot,
      })
      .then(() => {
        mutate();
        toast.success("Mentoria adicionada.");
      })
      .catch((e) => {
        toast.error(e.message);
      })
      .finally(() => {
        reset();
        closeModal();
      });
  };

  const kindOptions = [
    {
      label: "On-line",
      value: "ONLINE",
    },
    {
      label: "Presencial",
      value: "IN_PERSON",
    },
  ];

  return (
    <>
      <h5>Criar Mentoria</h5>
      <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
        <MenteesSelect register={register} />
        <MentorsSelect register={register} />
        <Select
          register={register}
          field='kind'
          label='Tipo'
          options={kindOptions}
        />
        <section className={styles.info}>
          <h6>Selecione a semana</h6>
          <p>
            Escolha um intervalo de datas para verificar quais horários estão
            disponíveis para agendamento com o mentor selecionado.
          </p>
        </section>
        <GetAvailability register={register} mentorId={watch("mentor_id")} />
        <Button type='submit' center primary>
          Criar
        </Button>
      </form>
    </>
  );
}
