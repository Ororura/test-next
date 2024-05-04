import { Chat } from '@/features/chat';
import { FC } from 'react';
import styles from './ChatWidget.module.css';

const ChatWidget: FC = () => {
  return (
    <div className={styles.chatWidgetContainer}>
      <Chat></Chat>
    </div>
  );
};

export default ChatWidget;
