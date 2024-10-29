import "@/styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  console.log("pageProps", pageProps);

  return (
    <>
      <h1>Header</h1>
      <div onClick={() => router.push("/")}>Home</div>
      <Link href="/about">About</Link>
      <Component {...pageProps} />
    </>
  );
}
