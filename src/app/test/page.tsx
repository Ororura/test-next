"use client";
import { FC } from "react";
import { useAppSelector } from "@/app/lib/hooks";
import { selectUserList } from "@/app/lib/features/user/UserEntity";

const Test: FC = () => {
  const user = useAppSelector((state) => state.user);
  console.log(user);
  return <div>asdasd</div>;
};

export default Test;
