import { addHours, format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(date: string, formatter: string) {
  const addedHours = new Date(date);
  return format(addedHours, formatter, {
    locale: ptBR,
  });
}
