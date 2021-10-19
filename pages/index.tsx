import { useContext } from "react";
import Intro from "../components/Intro";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PortfolioLine from "../components/PortfolioLine";
import Layout from "../components/Layout";
import { PortfolioType } from "../types/portfolios";
import { getAllPortfolios } from "./api/portfolios";
import About from "../components/About"
import Contact from "../components/Contact"
import { PortfoliosContext } from "../contexts/PortfoliosContext";

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
      <Sidebar />
      <Intro />
      <div id="portfolios" className="container">
        {portfolios?.map((portfolio) => (
          <PortfolioLine portfolio={portfolio} />
        ))}
      </div>
      <About />
      <Contact />
    </Layout>
  );
}
