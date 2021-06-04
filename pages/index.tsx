import Head from "next/head";

import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Blog from "../components/Blog";
import Portfolios from "../components/Portfolios";
import Container from "../components/Container";
import Layout from "../components/Layout";
import Footer from "../components/Footer";

import PortfoliosType from "../types/portfolios";
// import { useFetch } from "../hooks/fetcher";
import { getAllPortfolios } from "./api/portfolios";
import { useState } from "react";

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
  // const response = useFetch("/api/portfolios");
  const [input, setInput] = useState("");

  function handleInput() {}

  return (
    <Layout>
      <Head>
        <title>Luise Fialho | Editora e redatora</title>
      </Head>
      <NavBar />
      <Intro />
      <Portfolios portfolios={portfolios} />
      <Blog />
      <Footer />
    </Layout>
  );
}
