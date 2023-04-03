import '@/styles/globals.css'

import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>

    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
    </Head>


  <Component {...pageProps} />
  </>
)}
