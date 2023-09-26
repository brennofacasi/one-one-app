"use client";

import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import styles from "./styles.module.scss";

import { Calendar } from "@/components/Calendar";
import { dateDayMonth } from "./format-date";

interface DatePickerRangeProps {
  date: DateRange | undefined;
  setDate: any;
}

export function DatePickerRange({ date, setDate }: DatePickerRangeProps) {
  return (
    <div className={styles.box}>
      <div className={styles.date}>
        <CalendarIcon />
        {date?.from ? (
          date.to ? (
            <>
              {dateDayMonth(date.from)} - {dateDayMonth(date.to)}
            </>
          ) : (
            dateDayMonth(date.from)
          )
        ) : (
          <span>Escolha um intervalo de datas</span>
        )}
      </div>

      <div className={styles.calendar}>
        <Calendar
          initialFocus
          mode='range'
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
          locale={ptBR}
          disabled={{ before: new Date() }}
        />
      </div>
    </div>
  );
}
