import { StaticImageData } from "next/image";

export interface ModalProps {
  buttonContent?: string;
  primary?: boolean;
  icon?: string | StaticImageData;
  children: React.ReactNode;
}
