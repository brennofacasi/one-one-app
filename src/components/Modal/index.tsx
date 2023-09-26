"use client";

import Image from "next/image";
import { createContext, useContext, useRef } from "react";
import { Card } from "../Card";
import classNames from "classnames";

import styles from "./styles.module.scss";
import { Button } from "../forms/Button";
import close from "@/icons/close.svg";

import { ModalContextProps, ModalProps } from "./types";

const ModalContext = createContext({} as ModalContextProps);

export default function Modal({
  buttonContent,
  icon,
  children,
  primary,
  small,
}: ModalProps) {
  const modal = useRef<HTMLDialogElement>(null);

  const openModal = () => modal.current?.showModal();
  const closeModal = () => modal.current?.close();

  return (
    <ModalContext.Provider value={{ modal, openModal, closeModal }}>
      <Button icon={icon} onClick={openModal} primary={primary}>
        {buttonContent}
      </Button>
      <dialog className={styles.modal} ref={modal}>
        <Card>
          <div
            className={classNames(styles.modal__inside, small && styles.small)}
          >
            {children}
            <button className={styles.close} onClick={closeModal}>
              <Image src={close} alt='Ícone de fechar' />
            </button>
          </div>
        </Card>
      </dialog>
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModalContext);
}
