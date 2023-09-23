"use client";

import styles from "./login.module.scss";
import joystick from "@/icons/joystick.svg";
import Image from "next/image";
import { Button } from "@/components/forms/Button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { push } = useRouter();

  const onSubmit = (values: any) => {
    signIn("credentials", {
      username: values.username,
      password: values.password,
      redirect: false,
    }).then(() => push("/painel"));
  };
  return (
    <section className={styles.login}>
      <div className={styles.login__card}>
        <Image
          className={styles.login__image}
          width={96}
          src={joystick}
          alt='Joystick'
        />
        <h4 className={styles.login__title}>Oi. Faça seu login! ;)</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className={styles.input}
            type='text'
            placeholder='usuário'
            {...register("username", { required: true })}
          />
          <input
            className={styles.input}
            placeholder='senha'
            type='password'
            {...register("password", { required: true })}
          />
          <Button type='submit' center>
            Entrar
          </Button>
        </form>
      </div>
    </section>
  );
}
