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
} from "~/components";

import ProductsRecommendedQuery from "~/queries/productsRecommended.graphql";
import HeroQuery from "~/queries/hero.graphql";
import WelcomeQuery from "~/queries/welcome.graphql";
import OffersQuery from "~/queries/offers.graphql";

interface TProps {
  heroBanner: THero;
  offers: TOffer[];
  products: TProduct[];
  welcome: TWelcome;
}

const IndexPage: NextPage<TProps> = ({
  heroBanner,
  offers,
  products,
  welcome,
}) => (
  <Layout
    title="Propan | Установка и продажа газового оборудования по Казахстану - Главная | 
  Установка и продажа газового оборудования"
  >
    <Hero {...heroBanner} />
    <Welcome {...welcome} />
    <Offers offers={offers} />
    <Stages />
    <Products products={products} title="Насосы" />
  </Layout>
);

export const getServerSideProps: GetServerSideProps = async () => {
  const {
    data: { products },
  } = await client.query({
    query: gql`
      ${ProductsRecommendedQuery}
    `,
  });

  const {
    data: { heroBanner },
  } = await client.query({
    query: gql`
      ${HeroQuery}
    `,
  });

  const {
    data: { welcome },
  } = await client.query({
    query: gql`
      ${WelcomeQuery}
    `,
  });

  const {
    data: { offers },
  } = await client.query({
    query: gql`
      ${OffersQuery}
    `,
  });

  return {
    props: {
      heroBanner,
      offers,
      products,
      welcome,
    },
  };
};

export default IndexPage;
