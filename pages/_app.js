import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <h1>Header</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>

      <Component {...pageProps} />
    </>
  );
}
