import Head from "next/head";
import Intro from "../components/Intro";
import Blog from "../components/Blog";
import Portfolios from "../components/Portfolios";
import Layout from "../components/Layout";
import PortfoliosType from "../types/portfolios";
import { getAllPortfolios } from "./api/portfolios";
import Box from "../components/Box"

type HomeProps = {
  portfolios: PortfoliosType[];
};

export async function getStaticProps() {
  const portfolios = await getAllPortfolios();

  return {
    props: { portfolios },
  };
}

export default function Home({ portfolios }: HomeProps) {
  return (
    <Layout>
      <Intro />
      <Portfolios portfolios={portfolios} />
      <Blog />
    </Layout>
  );
}
