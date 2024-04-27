"use client";
import { FC, useEffect, useState } from "react";
import Services from "@/services/Services";
import { IUser } from "@/types/types";
import styles from "./User.module.css";

interface Props {
  id: number;
}

export const User: FC<Props> = (props) => {
  const [userData, setUserData] = useState<IUser>({
    email: "",
    firstName: "",
    id: 0,
    lastName: "",
    middleName: "",
    password: "",
  });

  useEffect(() => {
    (async () => {
      const data: IUser | null = await Services.get<IUser>(`http://localhost:8080/user/${props.id}`);
      if (data) {
        setUserData(data);
      }
    })();
  }, [props.id]);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <p>Name: {userData.firstName}</p>
        <p>Last Name: {userData.lastName}</p>
        <p>Middle Name: {userData.middleName}</p>
        <p>Email: {userData.email}</p>
        <p>Name: {userData.firstName}</p>
      </div>
    </div>
  );
};
