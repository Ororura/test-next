'use client';
import { FC, useEffect } from 'react';
// import { SubmitHandler, useForm } from 'react-hook-form';
// import { IPersonalMessage } from '@/features/personal-chat/types';
import { useGetUserByIDMutation } from '@/features';

const PersonalChat: FC = () => {
  const [postData] = useGetUserByIDMutation();
  // const { register, handleSubmit } = useForm<IPersonalMessage>();
  // const handlerSendMessage: SubmitHandler<IPersonalMessage> = async (data): Promise<void> => {
  //   await postData(data);
  // };

  useEffect(() => {
    (async () => {
      await postData(2);
    })();
  }, []);
  return <div>Personal Chat</div>;
};

export { PersonalChat };
