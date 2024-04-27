"use client";

import { FC } from "react";
import Services from "@/services/Services";
import styles from "./CreateUser.module.css";
import { SubmitHandler, useForm } from "react-hook-form";

type ICreateUser = {
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  password: string;
};

export const CreateUser: FC = () => {
  const { register, handleSubmit } = useForm<ICreateUser>();
  const handlerCreateUser: SubmitHandler<ICreateUser> = async (data) => {
    await Services.createUser<ICreateUser>(data);
  };

  return (
    <div className={styles.container}>
      <p className={styles.formTitle}>Создать нового пользователя</p>
      <form className={styles.formContainer} onSubmit={handleSubmit(handlerCreateUser)}>
        <label htmlFor="fname">Имя</label>
        <input className={styles.formInput} type="text" {...register("firstName")} placeholder="Введите имя" />
        <label htmlFor="lname">Фамилия</label>
        <input className={styles.formInput} type="text" {...register("lastName")} placeholder="Введите фамилию" />
        <label htmlFor="mname">Отчество</label>
        <input className={styles.formInput} type="text" {...register("middleName")} placeholder="Введите отчество" />
        <label htmlFor="email">Почта</label>
        <input className={styles.formInput} type="email" {...register("email")} placeholder="Введите email" />
        <label htmlFor="password">Пароль</label>
        <input className={styles.formInput} type="password" {...register("password")} placeholder="Введите пароль" />
        <button className={styles.formButton} type="submit">
          Зарегестрироваться
        </button>
      </form>
    </div>
  );
};
