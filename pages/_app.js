import "@/styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // console.log("pageProps", pageProps);

  // useEffect(() => {
  //   initialize;
  // }, []);

  return (
    <>
      {/* <Provider /> */}
      <h1>Header</h1>
      <div onClick={() => router.push("/")}>Home</div>
      <Link href="/about">About</Link>
      <Component {...pageProps} />
    </>
  );
}
