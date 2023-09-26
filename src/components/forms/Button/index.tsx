import { ReactElement } from "react";
import styles from "./styles.module.scss";
import { ButtonProps } from "./types";
import Image from "next/image";
import classNames from "classnames";

export const Button = ({
  children,
  primary,
  danger,
  light,
  icon,
  center,
  ...props
}: ButtonProps): ReactElement => {
  const styling = classNames(
    styles.button,
    primary && styles.primary,
    light && styles.light,
    danger && styles.danger,
    center && styles.center
  );

  return (
    <button className={styling} {...props}>
      {icon && <Image src={icon} alt='Ícone' />} {children}
    </button>
  );
};
