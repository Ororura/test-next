import { FC } from "react";
import { User } from "@/ui/components/user/User";

interface PageProps {
  params: { id: number };
}

const UsersPage: FC<PageProps> = ({ params }) => {
  return (
    <div>
      <User id={params.id}></User>
    </div>
  );
};

export default UsersPage;
