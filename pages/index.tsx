import Head from "next/head";
import Intro from "../components/Intro";
import PortfolioLine from "../components/PortfolioLine";
import Blog from "../components/Blog";
import Layout from "../components/Layout";
import { PortfolioType } from "../types/portfolios";
import { getAllPortfolios } from "./api/portfolios";

type HomeProps = {
  portfolios: PortfolioType[];
};

export async function getStaticProps() {
  const portfolios = await getAllPortfolios();
  // console.log(portfolios)

  return {
    props: { portfolios },
  };
}

export default function Home({ portfolios }: HomeProps) {
  return (
    <Layout>
      <Intro />
      <div id="portfolios" className="container-fluid">
        {portfolios?.map((portfolio) => (
          <PortfolioLine portfolio={portfolio} />
        ))}
      </div>
      <Blog />
    </Layout>
  );
}
