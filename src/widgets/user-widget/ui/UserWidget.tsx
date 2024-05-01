import { FC } from 'react';
import User from '@/entities/user/ui/User';
import { useGetUserByIdQuery } from '@/entities/user';
import styles from './User.module.css';

interface Props {
  id: number;
}

const UserWidget: FC<Props> = ({ id }) => {
  const { data } = useGetUserByIdQuery(id);
  return <div className={styles.container}>{data && <User data={data}></User>}</div>;
};

export default UserWidget;
