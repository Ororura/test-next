import { FC } from 'react';
import { IUser } from '@/entities/user';
import styles from './User.module.css';
interface Props {
  data: IUser;
}

const User: FC<Props> = ({ data }) => {
  return (
    <div className={styles.user}>
      {data && (
        <>
          <p>Name: {data.firstName}</p>
          <p>Last Name: {data.lastName}</p>
          <p>Middle Name: {data.middleName}</p>
          <p>Email: {data.email}</p>
          <p>Name: {data.firstName}</p>
        </>
      )}
    </div>
  );
};

export default User;
