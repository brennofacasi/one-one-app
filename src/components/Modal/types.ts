import { StaticImageData } from "next/image";

export interface ModalProps {
  btnContent: string;
  icon?: string | StaticImageData;
  children: React.ReactNode;
}
