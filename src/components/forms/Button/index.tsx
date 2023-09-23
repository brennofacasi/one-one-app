import { ReactElement } from "react";
import styles from "./styles.module.scss";
import { ButtonProps } from "./types";
import Image from "next/image";

export const Button = ({
  children,
  primary,
  icon,
  center,
  ...props
}: ButtonProps): ReactElement => {
  return (
    <button
      className={`${styles.button} ${primary ? styles.primary : ""} ${
        center ? styles.center : ""
      }`}
      {...props}
    >
      {icon && <Image src={icon} alt='Ícone' />} {children}
    </button>
  );
};
