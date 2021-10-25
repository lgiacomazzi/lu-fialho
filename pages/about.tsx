import About from "../components/About"
import Layout from "../components/Layout"

import { useContext } from "react";
import { PortfoliosContext } from "../contexts/PortfoliosContext";

const SobreMim = ({ portfolios }) => {
  const { setPortfolios } = useContext(PortfoliosContext); // ???
  setPortfolios(portfolios); // ???

  return (
    <Layout>
      <About />
    </Layout>);
};

export default SobreMim;
export { getStaticProps } from "../pages"
