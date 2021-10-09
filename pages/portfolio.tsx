import { AnimateSharedLayout } from "framer-motion";
import PortfolioLine from "../components/PortfolioLine";
import { getAllPortfolios } from "./api/portfolios";

export async function getStaticProps() {
  const portfolios = await getAllPortfolios();

  return {
    props: { portfolios },
  };
}

const Portfolio = ({ portfolios }) => {
  return (
    <div className="container-fluid">
      <div className="container">
        <h2>Portfólio</h2>
      </div>

    </div>
  );
};

export default Portfolio;
