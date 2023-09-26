import { format } from "date-fns";

export const convertTime = (time: string) => {
  const date = new Date("2022-01-01T" + time + ".000Z");
  return format(date, "HH:mm");
};

export const invertTime = (time: string) => {
  const fromTime = new Date("2022-01-01T" + time + ":00.000-03:00");
  const newTime = new Date(fromTime.toISOString().slice(0, -1));
  return format(newTime, "HH:mm:ss");
};
