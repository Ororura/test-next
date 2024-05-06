'use client';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IChat, stompClient, useGetChatQuery } from '..';
import styles from './Chat.module.css';
import { convertDate } from '../utils/ConvertDate';

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
    <div className={styles.container}>
      {textData.map((el, idx) => (
        <div className={styles.chatContainer} key={idx}>
          <div className={styles.nickAndTimeContainer}>
            <p className={styles.messageNick}>{el.name}</p>
            <p className={styles.messageNick}>{convertDate(el.timestamp)}</p>
          </div>
          <p className={styles.messageText}>{el.text}</p>
        </div>
      ))}
      <form onSubmit={handleSubmit(sendMessage)}>
        <input className={styles.input} placeholder='Введите ваше имя' type='text' {...register('name')} />
        <input className={styles.input} placeholder='Введите сообщение' type='text' {...register('text')} />
        <button className={styles.button} type='submit'>
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Chat;
