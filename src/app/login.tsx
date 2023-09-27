"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import styles from "./login.module.scss";

import joystick from "@/icons/joystick.svg";
import { Button } from "@/components/forms/Button";
import Input from "@/components/forms/Input";

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
          <Input
            register={register}
            field='username'
            placeholder='usuário'
            required
          />
          <Input
            register={register}
            field='password'
            type='password'
            placeholder='senha'
            required
          />

          <Button type='submit' center dark>
            Entrar
          </Button>
        </form>
      </div>
    </section>
  );
}
