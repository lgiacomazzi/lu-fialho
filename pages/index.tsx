import Head from "next/head";
import Intro from "../components/Intro";
import Blog from "../components/Blog";
import Portfolios from "../components/Portfolios";
import Layout from "../components/Layout";
import PortfoliosType from "../types/portfolios";
// import { useFetch } from "../hooks/fetcher";
import { getAllPortfolios } from "./api/portfolios";
import { useViewportScroll } from "framer-motion";
import { useEffect } from "react";

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
  const { scrollYProgress } = useViewportScroll();
  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  // const response = useFetch("/api/portfolios");
  return (
    <Layout>
      <Head>
        <title>Luise Fialho | Editora e redatora</title>
      </Head>
      <Intro />
      <Portfolios portfolios={portfolios} />
      <Blog />
    </Layout>
  );
}
