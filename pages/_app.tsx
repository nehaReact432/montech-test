import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../src/layout/header";
import useMetaMask from "../src/hook/useMataMask";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const { requestAccount, wallet, etherAccount } = useMetaMask();
  const route = useRouter();
  useEffect(() => {
    if (!!wallet.length && !!etherAccount.length) {
      route.push("/home");
    } else {
      route.push("/");
    }
  }, [wallet, etherAccount]);
  return (
    <Header wallet={wallet} etherAccount={etherAccount}>
      <Head>
        <title>montech task</title>
      </Head>
      <Component {...pageProps} requestAccount={requestAccount} />
    </Header>
  );
}
