'use client';
import { FC } from 'react';
import { IUser } from '@/types/types';
import styles from './User.module.css';

interface Props {
  user: IUser;
}

export const User: FC<Props> = (props) => {
  const userData: IUser = props.user;
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        {userData && (
          <>
            <p>Name: {userData.firstName}</p>
            <p>Last Name: {userData.lastName}</p>
            <p>Middle Name: {userData.middleName}</p>
            <p>Email: {userData.email}</p>
            <p>Name: {userData.firstName}</p>
          </>
        )}
      </div>
    </div>
  );
};
