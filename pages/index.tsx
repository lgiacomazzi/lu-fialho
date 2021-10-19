import { useContext } from "react";
import Head from "next/head";
import Intro from "../components/Intro";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PortfolioLine from "../components/PortfolioLine";
import Layout from "../components/Layout";
import About from "../components/About"
import Contact from "../components/Contact"

import { PortfolioType } from "../types/portfolios";
import { PortfoliosContext } from "../contexts/PortfoliosContext";
import { getAllPortfolios } from "./api/portfolios";


type HomeProps = {
  portfolios: PortfolioType[];
};

export async function getStaticProps() {
  const portfolios = await getAllPortfolios();

  return {
    props: { portfolios },
  };
}

export default function Home({ portfolios }: HomeProps) {
  const { setPortfolios } = useContext(PortfoliosContext);
  console.log(Array.isArray(portfolios))
  setPortfolios(portfolios);

  return (
    <Layout home>
      <Head>
        <title>Luise Fialho | Portfólio</title>
      </Head>
      <Sidebar />
      <Intro />
      <div id="portfolios" className="container">
        <h2>Portfólio</h2>
        {portfolios?.map((portfolio) => (
          <PortfolioLine portfolio={portfolio} />
        ))}
      </div>
      <About />
      <Contact />
    </Layout>
  );
}
