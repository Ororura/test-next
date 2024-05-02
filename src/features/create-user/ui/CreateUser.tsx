'use client';
import { FC } from 'react';
import styles from './CreateUser.module.css';
import { ICreateUser } from '@/features/create-user';
import { useCreateUserMutation } from '@/features/create-user/api';
import { SubmitHandler, useForm } from 'react-hook-form';

const CreateUser: FC = () => {
  const { register, handleSubmit } = useForm<ICreateUser>();
  const [postData] = useCreateUserMutation();

  const handlerCreateUser: SubmitHandler<ICreateUser> = async (data) => {
    try {
      await postData(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit(handlerCreateUser)}>
      <label htmlFor='fname'>Имя</label>
      <input className={styles.formInput} type='text' {...register('firstName')} placeholder='Введите имя' />
      <label htmlFor='lname'>Фамилия</label>
      <input className={styles.formInput} type='text' {...register('lastName')} placeholder='Введите фамилию' />
      <label htmlFor='mname'>Отчество</label>
      <input className={styles.formInput} type='text' {...register('middleName')} placeholder='Введите отчество' />
      <label htmlFor='email'>Почта</label>
      <input className={styles.formInput} type='email' {...register('email')} placeholder='Введите email' />
      <label htmlFor='password'>Пароль</label>
      <input className={styles.formInput} type='password' {...register('password')} placeholder='Введите пароль' />
      <button className={styles.formButton} type='submit'>
        Зарегистрироваться
      </button>
    </form>
  );
};

export default CreateUser;
