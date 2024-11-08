import "@/styles/globals.css";
import { initialize } from "next/dist/server/lib/render-server";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // useEffect(() => {
  //   initialize;
  // }, []);

  console.log("pageProps", pageProps);

  return (
    <>
      <Provider />
      <h1>Header</h1>
      <div onClick={() => router.push("/")}>Home</div>
      <Link href="/about">About</Link>
      <Component {...pageProps} />
    </>
  );
}
