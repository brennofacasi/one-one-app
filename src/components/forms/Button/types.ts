import { StaticImageData } from "next/image";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: string | StaticImageData;
  primary?: boolean;
  danger?: boolean;
  light?: boolean;
  dark?: boolean;
  center?: boolean;
}
