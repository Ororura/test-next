'use client';
import { FC } from 'react';
import { User } from '@/ui/components/user/User';
import { useGetUserByIdQuery } from '@/core/user/api';
import { IUser } from './types';

interface PageProps {
  params: { id: number };
}

const UsersPage: FC<PageProps> = ({ params }) => {
  const { data } = useGetUserByIdQuery(params.id) as { data: IUser };
  console.log(data);
  return (
    <div>
      <User user={data}></User>
    </div>
  );
};

export default UsersPage;
