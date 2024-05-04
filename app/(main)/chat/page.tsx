import { ChatWidget } from '@/widgets/chat-widget';
import { FC } from 'react';
import styles from './page.module.css';

const Page: FC = () => {
  return (
    <div className={styles.pageContainer}>
      <ChatWidget></ChatWidget>
    </div>
  );
};

export default Page;
