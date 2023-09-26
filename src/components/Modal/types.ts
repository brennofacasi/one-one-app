import { StaticImageData } from "next/image";
import { RefObject } from "react";

export interface ModalProps {
  buttonContent?: string;
  primary?: boolean;
  icon?: string | StaticImageData;
  small?: boolean;
  children: React.ReactNode;
}

export interface ModalContextProps {
  modal: RefObject<HTMLDialogElement>;
  openModal: () => void;
  closeModal: () => void;
}
