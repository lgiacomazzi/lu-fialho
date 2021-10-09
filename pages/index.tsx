import Head from "next/head";
import Intro from "../components/Intro";
import Blog from "../components/Blog";
import Portfolios from "../components/Portfolios";
import Layout from "../components/Layout";
import { PortfolioType } from "../types/portfolios";
import { getAllPortfolios } from "./api/portfolios";
import Box from "../components/Box"

type HomeProps = {
  portfolios: PortfolioType[];
};

export async function getStaticProps() {
  const portfolios = await getAllPortfolios();
  console.log(portfolios)
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
