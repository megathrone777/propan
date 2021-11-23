import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { gql } from "@apollo/client";
import client from "../apollo-client";

import {
  Layout,
  Hero,
  Offers,
  Products,
  Welcome,
  TProduct,
  THero,
  TWelcome,
  TOffer,
  Stages,
  Partners,
  TPartner,
  TCertificate,
  Certificates,
} from "~/components";

import IndexPageQuery from "~/queries/indexpage.graphql";

interface TProps {
  heroBanner: THero;
  offers: TOffer[];
  products: TProduct[];
  welcome: TWelcome;
  partners: TPartner[];
  certificates: TCertificate[];
}

const IndexPage: NextPage<TProps> = ({
  heroBanner,
  offers,
  products,
  welcome,
  partners,
  certificates,
}) => (
  <Layout
    title="Propan | Установка и продажа газового оборудования по Казахстану - Главная | 
  Установка и продажа газового оборудования"
  >
    <Hero {...heroBanner} />
    <Welcome {...welcome} />
    <Offers offers={offers} />
    <Stages />
    <Certificates certificates={certificates} />
    <Partners partners={partners} />
    <Products products={products} title="Насосы" />
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { products, heroBanner, welcome, offers, partners, certificates },
  } = await client.query({
    query: gql`
      ${IndexPageQuery}
    `,
  });

  return {
    props: {
      heroBanner,
      offers,
      products,
      welcome,
      partners,
      certificates,
    },
  };
};

export default IndexPage;
