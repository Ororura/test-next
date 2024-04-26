import { Context, IContextType, IData } from "@/core/context";
import { useContext } from "react";

export default function Home() {
  const { data } = useContext(Context) as IContextType;
  console.log(data);

  return <main>Home</main>;
}
