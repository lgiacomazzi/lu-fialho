import Head from "next/head";
import Layout from "../components/Layout";
import Portfolios from "../components/Portfolios";

const Portfolio = () => {
  return (
    <Layout>
      <Head>
        <title>Portfólio | Luise Fialho</title>
      </Head>
      <Portfolios />
    </Layout>
  );
};

export default Portfolio;
