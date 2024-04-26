import Link from "next/link";

export default function Home() {
  return (
    <main>
      <>
        <Link href="/products">Продукты</Link>
        <Link href="/user">Пользователи</Link>
      </>
    </main>
  );
}
