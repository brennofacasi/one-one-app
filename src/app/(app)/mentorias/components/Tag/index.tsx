import classNames from "classnames";
import styles from "./styles.module.scss";

export function Tag({ kind }: { kind: string }) {
  const tags = [
    {
      kind: "ONLINE",
      style: styles.online,
      label: "On-line",
    },
    {
      kind: "IN_PERSON",
      style: styles.inperson,
      label: "Presencial",
    },
  ];
  return (
    <>
      {tags.map((tag) => {
        if (tag.kind.includes(kind)) {
          return (
            <span key={tag.kind} className={classNames(styles.tag, tag.style)}>
              {tag.label}
            </span>
          );
        }
      })}
    </>
  );
}
