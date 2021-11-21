import React from "react";
import Head from "next/head";

import { Header, Footer } from "~/components";

interface TProps {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<TProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export { Layout };
