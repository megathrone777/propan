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

import ProductsRecommendedQuery from "~/queries/productsRecommended.graphql";
import HeroQuery from "~/queries/hero.graphql";
import WelcomeQuery from "~/queries/welcome.graphql";
import OffersQuery from "~/queries/offers.graphql";
import PartnersQuery from "~/queries/partners.graphql";
import CertificatesQuery from "~/queries/certificates.graphql";

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

  const {
    data: { partners },
  } = await client.query({
    query: gql`
      ${PartnersQuery}
    `,
  });

  const {
    data: { certificates },
  } = await client.query({
    query: gql`
      ${CertificatesQuery}
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
