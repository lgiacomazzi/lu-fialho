import Head from "next/head";
import Intro from "../components/Intro";
import Portfolios from "../components/Portfolios";
import Layout from "../components/Layout";
import About from "../components/About"
import Contact from "../components/Contact"

import { PortfolioType } from "../types/portfolios";
import { useContext } from "react";
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
  setPortfolios(portfolios);

  return (
    <Layout home>
      <Head>
        <title>Luise Fialho | Editora e redatora</title>
        <meta
          name="description"
          content="Projetos editoriais - Redação - Leitura crítica - Produção de conteúdo" />
      </Head>
      <Intro />
      <Portfolios />
      <About />
      <Contact />
    </Layout>
  );
}