"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Avatar } from "../Avatar";
import styles from "./styles.module.scss";
import arrow from "@/icons/chevron-left.svg";
import { Card } from "../Card";

export const HeaderTopbar = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <Card>
      <div className={styles.header__topbar}>
        {!path.includes("painel") && (
          <button className={styles.back} onClick={() => router.back()}>
            <Image src={arrow} alt='Voltar' />
          </button>
        )}
        <input type='text' className={styles.search} />
        <Avatar />
      </div>
    </Card>
  );
};
