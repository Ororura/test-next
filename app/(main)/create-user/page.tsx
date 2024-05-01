import { FC } from 'react';
import styles from './page.module.css';
import CreateUserWidget from '@/widgets/create-user-widget/ui/CreateUserWidget';

const CreateUserPage: FC = () => {
  return (
    <div className={styles.container}>
      <CreateUserWidget></CreateUserWidget>
    </div>
  );
};

export default CreateUserPage;
