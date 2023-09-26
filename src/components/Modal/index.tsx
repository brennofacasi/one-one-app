"use client";

import { useRef } from "react";
import { Card } from "../Card";
import styles from "./styles.module.scss";
import { Button } from "../forms/Button";
import Image from "next/image";
import close from "@/icons/close.svg";

import { ModalProps } from "./types";

export default function Modal({
  buttonContent,
  icon,
  children,
  primary,
}: ModalProps) {
  const modal = useRef<HTMLDialogElement>(null);

  const openModal = () => modal.current?.showModal();
  const closeModal = () => modal.current?.close();

  return (
    <>
      <Button icon={icon} onClick={openModal} primary={primary}>
        {buttonContent}
      </Button>
      <dialog className={styles.modal} ref={modal}>
        <Card>
          <div className={styles.modal__inside}>
            {children}
            <button className={styles.close} onClick={closeModal}>
              <Image src={close} alt='Ícone de fechar' />
            </button>
          </div>
        </Card>
      </dialog>
    </>
  );
}
