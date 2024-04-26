"use client";
import { FC, useEffect, useState } from "react";
import Services from "@/services/Services";
import { IUser } from "@/types/types";
import styles from "./User.module.css";

export const User: FC = () => {
  const [userData, setUserData] = useState<IUser[]>([]);
  useEffect(() => {
    (async () => {
      const data: IUser[] | null = await Services.get<IUser[]>("http://localhost:8080/user");
      if (data) {
        setUserData(data);
      }
    })();
  }, []);
  return (
    <div className={styles.container}>
      {userData.map((value, index) => (
        <div className={styles.user} key={index}>
          <p>Name: {value.firstName}</p>
          <p>Last Name: {value.lastName}</p>
          <p>Middle Name: {value.middleName}</p>
          <p>Email: {value.email}</p>
          <p>Name: {value.firstName}</p>
        </div>
      ))}
    </div>
  );
};
