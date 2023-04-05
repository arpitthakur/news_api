import "@/styles/globals.css";

import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
