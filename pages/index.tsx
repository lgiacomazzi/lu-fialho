import Intro from "../components/Intro";
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import PortfolioLine from "../components/PortfolioLine";
import Layout from "../components/Layout";
import { PortfolioType } from "../types/portfolios";
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
  return (
    <Layout>
      <Navbar />
      <Sidebar portfolios={portfolios} />
      <Intro />
      <div id="portfolios" className="container-fluid">
        {portfolios?.map((portfolio) => (
          <PortfolioLine portfolio={portfolio} />
        ))}
      </div>
    </Layout>
  );
}
