import { CreateMeetingProps } from "./types";
import { useForm } from "react-hook-form";
import { Button } from "@/components/forms/Button";
import styles from "./styles.module.scss";

import { clientApi } from "@/services/fetch";
import { useModalContext } from "@/components/Modal";
import { toast } from "react-toastify";
import Input from "@/components/forms/Input";

export default function CreateOrEditMentor({
  initialData,
  mutate,
}: CreateMeetingProps) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialData,
  });
  const { closeModal } = useModalContext();

  const postMentor = (values: any) => {
    clientApi
      .post("mentor/", values)
      .then(() => {
        mutate();
        toast.success("Mentor adicionado.");
      })
      .catch((e) => {
        toast.error(e.message);
      })
      .finally(() => {
        reset();
        closeModal();
      });
  };

  const editMentor = (values: any) => {
    clientApi
      .patch("mentor/", values)
      .then(() => {
        mutate();
        toast.success("Mentor atualizado.");
      })
      .catch((e) => {
        toast.error(e.message);
      })
      .finally(() => {
        reset();
        closeModal();
      });
  };

  return (
    <>
      <h5>{initialData ? "Editar" : "Criar"} Mentor</h5>
      <form
        className={styles.wrapper}
        onSubmit={handleSubmit(initialData ? editMentor : postMentor)}
      >
        <Input
          register={register}
          field='first_name'
          label='Primeiro Nome'
          required
        />
        <Input
          register={register}
          field='last_name'
          label='Último Nome'
          required
        />
        <Input
          register={register}
          field='email'
          label='E-mail'
          type='email'
          required
        />

        <Button type='submit' center primary>
          {initialData ? "Editar" : "Criar"}
        </Button>
      </form>
    </>
  );
}
