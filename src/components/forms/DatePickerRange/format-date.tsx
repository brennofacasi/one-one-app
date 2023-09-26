import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const dateDayMonth = (dateToFormat: Date) => {
  const result = format(new Date(dateToFormat), "d 'de' MMMM", {
    locale: ptBR,
  });
  return result;
};
