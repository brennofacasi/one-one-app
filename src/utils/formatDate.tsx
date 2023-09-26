import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDate(date: string, formatter: string) {
  const rawDate = new Date(date);
  return format(rawDate, formatter, {
    locale: ptBR,
  });
}
