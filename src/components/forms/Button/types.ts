import { StaticImageData } from "next/image";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  icon?: string | StaticImageData;
  primary?: boolean;
  center?: boolean;
}
