'use client';
import { FC, useEffect, useState } from 'react';
import { useGetChatQuery } from '../api';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IChat, stompClient } from '..';
import styles from './Chat.module.css';

const Chat: FC = () => {
  const [textData, setTextData] = useState<IChat[]>([]);
  const { data } = useGetChatQuery(null);
  const { register, handleSubmit } = useForm<IChat>();

  useEffect(() => {
    if (data) {
      setTextData(data);
    }
  }, [data]);

  useEffect(() => {
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/chat', (greeting) => {
        setTextData(JSON.parse(greeting.body));
      });
    });
  }, []);

  const sendMessage: SubmitHandler<IChat> = (data) => {
    stompClient.send('/app/chat', {}, JSON.stringify(data));
  };

  return (
    <div>
      {textData.map((el, idx) => (
        <div className={styles.chatContainer} key={idx}>
          <p>Имя: {el.name}</p>
          <p>Сообщение: {el.text}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit(sendMessage)}>
        <input placeholder='Введите ваше имя' type='text' {...register('name')} />
        <input placeholder='Введите сообщение' type='text' {...register('text')} />
        <button type='submit'>Отправить</button>
      </form>
    </div>
  );
};

export default Chat;
