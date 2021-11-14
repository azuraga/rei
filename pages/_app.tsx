import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {

  return <> <Head>
      <title>Tadano Rei Birthday Project</title>
      <meta name="description" content="Happy birthday!" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
