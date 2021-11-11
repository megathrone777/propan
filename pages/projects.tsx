import React from "react";
import { NextPage, GetServerSideProps } from "next";
import { gql } from "@apollo/client";
import client from "../apollo-client";

import { Layout, PageHeader, PageContent } from "~/components";

interface TProps {}

const ProjectsPage: NextPage<TProps> = () => (
  <Layout title="Propan | Проекты">
    <PageHeader heading="О Компании" />
    <PageContent>PageContent</PageContent>
  </Layout>
);

export default ProjectsPage;
