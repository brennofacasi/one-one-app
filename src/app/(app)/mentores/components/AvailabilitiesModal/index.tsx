"use client";

import { toast } from "react-toastify";
import { useFetch } from "@/hooks/useFetch";
import { useForm } from "react-hook-form";
import { clientApi } from "@/services/fetch";
import { ChevronRight } from "lucide-react";

import { AvailabilitiesModalProps, Availability } from "./types";

import { States } from "@/components/States";
import Select from "@/components/forms/Select";
import { Button } from "@/components/forms/Button";
import Input from "@/components/forms/Input";

import trash from "@/icons/trash.svg";
import plus from "@/icons/plus.svg";

import styles from "./styles.module.scss";

import { weekDays } from "./week-days";
import { convertTime, invertTime } from "./time-utils";

export default function AvailabilitiesModal({
  name,
  id,
}: AvailabilitiesModalProps) {
  const { data, isLoading, error, mutate } = useFetch(
    `availability?mentor_id=${id}`
  );

  const { register, handleSubmit, reset } = useForm();

  if (isLoading) return <States.Loading />;
  if (error) return <States.NotOk />;

  const deleteAvailability = (id: number) => {
    clientApi
      .delete(`availability/${id}`)
      .then(() => {
        mutate();
      })
      .catch((e) => toast.error(e.message));
  };

  const postAvailability = (values: any) => {
    const result = {
      availabilities: [
        {
          mentor_id: id,
          week_day: values.week_day,
          from_time: invertTime(values.from_time),
          to_time: invertTime(values.to_time),
        },
      ],
    };

    clientApi.post("availability/", result).then(() => {
      mutate();
      reset();
    });
  };

  return (
    <>
      <section className={styles.infos}>
        <h5>Disponibilidade de {name}</h5>
        <p>Horários no formato 24 horas, horário de Brasília.</p>
      </section>

      {data.availabilities.map((item: Availability) => {
        return (
          <div key={item.id} className={styles.availability}>
            <p>{item.week_day}</p>
            <div className={styles.availability__right}>
              {convertTime(item.from_time)} <ChevronRight size={16} />
              {convertTime(item.to_time)}
              <Button
                onClick={() => deleteAvailability(item.id)}
                icon={trash}
                light
              />
            </div>
          </div>
        );
      })}

      <form
        onSubmit={handleSubmit(postAvailability)}
        className={styles.availability__add}
      >
        <Select
          label='Dia da semana'
          register={register}
          field='week_day'
          options={weekDays}
          required
        />
        <div className={styles.availability__right}>
          <Input
            type='time'
            register={register}
            field='from_time'
            size={5}
            maxLength={5}
            required
          />

          <ChevronRight size={16} />
          <Input
            type='time'
            register={register}
            field='to_time'
            size={5}
            maxLength={5}
            required
          />
          <Button type='submit' icon={plus} />
        </div>
      </form>
    </>
  );
}
