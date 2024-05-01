import { FC } from 'react';
import CreateUser from '@/features/create-user/ui/CreateUser';

const CreateUserWidget: FC = () => {
  return (
    <div>
      <p>Создать нового пользователя</p>
      <CreateUser></CreateUser>
    </div>
  );
};

export default CreateUserWidget;
