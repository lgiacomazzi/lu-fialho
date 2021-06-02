import Head from "next/head";

import NavBar from "../components/NavBar";
import Intro from "../components/Intro";
import Blog from "../components/Blog";
import Portfolios from "../components/Portfolios";
import Container from "../components/Container";
import Layout from "../components/Layout";

import PortfoliosType from "../types/portfolios";
import { useFetch } from "../hooks/fetcher";
import api from "../services/api";

type HomeProps = {
  data: PortfoliosType[];
};

export async function getStaticProps() {
  const { data } = await api.get("/api/portfolios");
  console.log(data);
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }: HomeProps) {
  // const response = useFetch("/api/portfolios");
  // console.log(response);

  return (
    <Layout>
      <Head>
        <title>Luise Fialho | Editora e redatora</title>
      </Head>
      <NavBar />
      <Container>
        <Intro />
        <Portfolios portfolios={data} />
        <Blog />
        {/* <SobreMim /> */}
        {/* <Contato /> */}
      </Container>
    </Layout>
  );
}
