import { clientApi } from "@/services/fetch";
import styles from "./styles.module.scss";

import { Button } from "@/components/forms/Button";
import { Tag } from "../Tag";

import check from "@/icons/check.svg";
import trash from "@/icons/trash.svg";
import video from "@/icons/video.svg";

import { LineProps } from "./types";
import { formatDate } from "@/utils/formatDate";

export default function Line({
  data,
  mutate,
}: {
  data: LineProps;
  mutate: () => void;
}) {
  const deleteMeeting = () => {
    clientApi.delete(`meeting/${data.id}`).then(() => {
      mutate();
    });
  };

  return (
    <div className={styles.line}>
      <section className={styles.infos}>
        <div className={styles.avatar}></div>

        <div className={styles.people}>
          <p>
            <strong>
              {data.mentee.first_name} {data.mentee.last_name}
            </strong>{" "}
            + {data.mentor.first_name}
          </p>
          <p>Empresa: {data.mentee.company}</p>
        </div>

        <div className={styles.time}>
          {formatDate(data.slot.start_time, "dd/MM")}
        </div>

        <div className={styles.time}>
          <p>
            {formatDate(data.slot.start_time, "HH'h'mm")} -{" "}
            {formatDate(data.slot.end_time, "HH'h'mm")}
          </p>
          <p>Horário de Brasília</p>
        </div>
        <Tag kind={data.kind} />
      </section>

      <section className={styles.actions}>
        {data.kind === "ONLINE" && <Button icon={video} />}
        <Button icon={check} />
        <Button icon={trash} onClick={deleteMeeting} />
      </section>
    </div>
  );
}
