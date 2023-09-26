import { useState } from "react";
import { DateRange } from "react-day-picker";
import { format, formatISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { clientApi } from "@/services/fetch";

import { Slot } from "./types";
import { groupBy } from "@/utils/groupBy";

import { Button } from "@/components/forms/Button";
import { DatePickerRange } from "@/components/forms/DatePickerRange";
import { States } from "@/components/States";
import styles from "./styles.module.scss";

export default function GetAvailability({
  mentorId,
  register,
}: {
  mentorId: number;
  register: any;
}) {
  const [date, setDate] = useState<DateRange | undefined>();
  const [slots, setSlots] = useState({});
  const [loading, setLoading] = useState(false);

  const params = {
    params: {
      mentor_id: mentorId,
      week_starts: date?.from,
      week_ends: date?.to,
      slot_duration: 30,
    },
  };

  const formatISOwithouTimeZone = (dateTime: string) => {
    const date = new Date(dateTime);
    const newDate = new Date(date.toISOString().slice(0, -1));
    const result = format(newDate, "yyyy-MM-dd'T'HH:mm:ss");
    return result;
  };

  const getSlots = (e: any) => {
    e.preventDefault();

    if (!date) return;

    setLoading(true);
    clientApi
      .get("mentor/slots", params)
      .then((res) => {
        const organizedSlots = res.data.slots.map((slot: any) => {
          return {
            day: format(new Date(slot.start_time), "cccc, dd 'de' MMMM", {
              locale: ptBR,
            }),
            from: format(new Date(slot.start_time), "HH'h'mm"),
            to: format(new Date(slot.end_time), "HH'h'mm"),
            value:
              formatISOwithouTimeZone(slot.start_time) +
              ";" +
              formatISOwithouTimeZone(slot.end_time),
          };
        });

        const result = groupBy(["day"])(organizedSlots);
        setSlots(result);
      })
      .finally(() => setLoading(false));
  };

  return (
    <>
      <DatePickerRange date={date} setDate={setDate} />
      <Button onClick={getSlots} center light>
        Carregar horários disponíveis
      </Button>

      {loading && <States.Loading />}

      {Object.entries(slots).length === 0 && (
        <p className={styles.noslots}>
          Não há horários disponíveis para os dias selecionados.
        </p>
      )}

      {Object.entries(slots).map((item: any, index: number) => (
        <section key={index} className={styles.day}>
          <h6>{item[0]}</h6>

          <fieldset className={styles.slots}>
            {item[1].map((slot: Slot, index: number) => {
              return (
                <div key={index} className={styles.slot}>
                  <input
                    {...register("radio")}
                    type='radio'
                    value={slot.value}
                    id={slot.value}
                  />
                  <label htmlFor={slot.value}>
                    {slot.from} - {slot.to}
                  </label>
                </div>
              );
            })}
          </fieldset>
        </section>
      ))}
    </>
  );
}
