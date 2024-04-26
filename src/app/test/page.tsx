import styles from "./User.module.css";
import { IUser } from "@/types/types";

const fetchData = async (): Promise<IUser[]> => {
  try {
    const response: Response = await fetch("http://localhost:8080/user", { cache: "force-cache" });
    return await response.json();
  } catch (error) {
    console.error("Error fetching user data:", error);
    return [];
  }
};

export default async function User() {
  const userData: IUser[] = await fetchData();

  return (
    <div className={styles.container}>
      {userData.map((value, index) => (
        <div className={styles.user} key={index}>
          <p>Name: {value.firstName}</p>
          <p>Last Name: {value.lastName}</p>
          <p>Middle Name: {value.middleName}</p>
          <p>Email: {value.email}</p>
        </div>
      ))}
    </div>
  );
}
