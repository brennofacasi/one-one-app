import { useSession } from "next-auth/react";
import styles from "./styles.module.scss";

export const Avatar = () => {
  const { data } = useSession();
  return (
    <div className={styles.avatar__wrapper}>
      <span className={styles.avatar__name}>{data?.user?.name}</span>

      {data?.user?.image && (
        <img
          className={styles.avatar__image}
          src={data?.user?.image}
          width={40}
          height={40}
          alt='Foto'
        />
      )}
    </div>
  );
};
