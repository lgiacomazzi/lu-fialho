import Head from "next/head";

import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Blog from "../components/Blog";
import Portfolios from "../components/Portfolios";
import Container from "../components/Container";
import Layout from "../components/Layout";

import PortfoliosType from "../types/portfolios";
import { useFetch } from "../hooks/fetcher";
import { getAllPortfolios } from "./api/portfolios";
import { useState } from "react";

type HomeProps = {
  data: PortfoliosType[];
};

export async function getStaticProps() {
  const portfolios = await getAllPortfolios();
  console.log(typeof (await getAllPortfolios()));
  return {
    props: { portfolios },
  };
}

export default function Home({ portfolios }) {
  // const response = useFetch("/api/portfolios");
  const [input, setInput] = useState("");

  function handleInput() {}

  return (
    <Layout>
      <Head>
        <title>Luise Fialho | Editora e redatora</title>
      </Head>
      <NavBar />
      <Container>
        <input></input>
        <Intro />
        <Portfolios portfolios={portfolios} />
        <Blog />
        {/* <SobreMim /> */}
        {/* <Contato /> */}
      </Container>
    </Layout>
  );
}
