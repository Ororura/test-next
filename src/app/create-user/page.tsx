import { FC } from "react";
import { CreateUser } from "@/ui/components/createUser/CreateUser";
import styles from "./page.module.css";

const CreateUserPage: FC = () => {
  return (
    <div className={styles.container}>
      <CreateUser></CreateUser>
    </div>
  );
};

export default CreateUserPage;
