'use client';
import { FC } from 'react';
import UserWidget from '@/widgets/user-widget/ui/UserWidget';

interface PageProps {
  params: { id: number };
}

const UsersPage: FC<PageProps> = ({ params }) => {
  return (
    <div>
      <UserWidget id={params.id}></UserWidget>
    </div>
  );
};

export default UsersPage;
